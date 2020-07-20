---
layout: post
tags: technology
---

# Connecting Apache Solr with Tableau

Over the last few days we put up a demo to expose a sample dataset (indexed on Apache Solr) and to be imported in Tableau.

<script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.6.0/mermaid.min.js"></script>

## Overview

<div class="mermaid">
  graph TD;
      Data-->Solr;
      Solr_Document-->Solr_Query;
      Solr_Query-->Gramex_ProxyHandler;
      GramexProxyHandler-->Pandas_DataFrame;
      Pandas_DataFrame-->Hyper_Extract;
      Hyper_Extract-->Tableau;
</div>

## Apache Solr
Using Solr after having tried lunr (super dev friendly) and ElasticSearch/Kibana (more UI friendly) feels archaic.

### Indexing and re-indexing
Uploading a file as a document and having it indexed in Solr works OK after two tries. a) First, uploading a file crashed the workflow. b) After asking around, I then picked the file type and copy-pasted the content. 

The trouble is with updating existing document. Read through to know more.

### multiValues by default
For the uploaded document in a core, Solr uses multiValues by default which creates a JSON item as below:

```json
{
  "ISO3":["CHN"],
  "Name":["China"],
  "Year":2014,
  "id":["9de7a2fa-75bf-4f72-8a4c-460e56b96ad4"],
  "Start_Date":["2014-05-08T00:00:00Z"],
  "Event_Name":["100 year storm"],
  "Hazard_Category":["Weather related"],
  "Hazard_Type":["Storm"],
  "New_Displacements":447000,
  "_version_":1672372223938134016
},
```

note the values in array (it can have multiple values for each attribute). This is perfectly fine for lookups within Solr where each attribute supports multiple values. As we convert this object to a `Pandas` dataframe it results in an object as below:

```py
| ISO3 | Name | Year | id | Start_date | Event_Name | Hazard_Category | Hazard_Type | New_Displacements | _version_ |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| ["CHN"] | ["China"] | 2014 | ["9de7a2fa-75bf-4f72-8a4c-460e56b96ad4"] | ["2014-05-08T00:00:00Z"] | ["100 year storm"] | ["Weather related"] | ["Storm"] | 447000 | 1672372223938134016 |
```

Writing this object to a Hyper extract would fail due to the data structure within each dataframe cell. It took us few moments of debugging to realize the issue. Since the data source is Apache Solr, it was tricky to figure out a fix for us (both of us were working with Solr the first time).

Turns out, we had to update the document related schema. 

### Updating schema

I updated the uploaded document's `managed-schema`, `schema.xml` and `solrconfig.xml` using the most helpful [StackOverflow thread](https://stackoverflow.com/questions/44281922/how-to-turn-off-multivalue-in-solr).

- in `managed-schema` file, find all instances of `multiValued="true"` and replace with `multiValued="false"`
- copy `managed-schema` to `schema.xml`
- add `<schemaFactory class="ClassicIndexSchemaFactory"/>` to `schema.xml` and `solrconfig.xml`

and our target JSON item is as below:

```json
{
  "ISO3":"CHN",
  "Name":"China",
  "Year":2014,
  "id":"9de7a2fa-75bf-4f72-8a4c-460e56b96ad4",
  "Start_Date":"2014-05-08T00:00:00Z",
  "Event_Name":"100 year storm",
  "Hazard_Category":"Weather related",
  "Hazard_Type":"Storm",
  "New_Displacements":447000,
  "_version_":1672372223938134016
},
```

This results in a `Pandas` dataframe object as below:

```py
| ISO3 | Name | Year | id | Start_date | Event_Name | Hazard_Category | Hazard_Type | New_Displacements | _version_ |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| "CHN" | "China" | 2014 | "9de7a2fa-75bf-4f72-8a4c-460e56b96ad4" | "2014-05-08T00:00:00Z" | "100 year storm" | "Weather related" | "Storm" | 447000 | 1672372223938134016 |
```

## ProxyHandler in Gramex

Gramex's [ProxyHandler](https://learn.gramener.com/guide/proxyhandler/) is straightforward. Give it an API endpoint with any attributes and it fetches data. We used Solr's document query as input here. As Gramex supports [caching](https://learn.gramener.com/guide/cache/) out of the box I configured it.

## Connecting data to Tableau

We tried two approaches to integrate ProxyHandler endpoint with Tableau:

- via WDC, web data connector and
- using Hyper extract

### WDC approach

[Web Data Connector](https://help.tableau.com/current/pro/desktop/en-us/examples_web_data_connector.htm) in Tableau needs a HTML file that makes a connection to remote endpoint. We create a custom connector using JavaScript and fetch the remote data source.

Once *ready* Tableau should recognize the data table within the WDC and show data rows. However, that didn't happen. Tableau showed one column (`id`) and showed the rest columns as empty. It was perplexing with no error messages. After spending some time on it we tried the next approach.

### Hyper approach

Tableau supports *importing* using its [Hyper API](https://help.tableau.com/current/api/hyper_api/en-us/docs/hyper_api_create_update.html). The default example is useful in creating a Hyper extract.

There are a few gotchas:

- it expects us to create the data schema upfront
- it's not a live connection. Any time data gets updated, Hyper file needs to be updated.

This approach worked as expected, we were able to fetch data into Tableau.

## Notes

I worked with [Prashant PK](https://www.linkedin.com/in/prashant-kuruamparambatta-16404849/) [LinkedIn], a colleague at Gramener on this. He took care of the WDC, Hyper configurations and Tableau. I created Solr and Gramex ProxyHandler endpoints and assisted with debugging. [Sagar](https://www.linkedin.com/in/sagar-yellina-4356368b/) [LinkedIn], our infrastructure specialist, helped install Solr on the server.

