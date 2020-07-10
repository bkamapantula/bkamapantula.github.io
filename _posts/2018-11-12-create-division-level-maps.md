---
layout: post
tags: opensource qgis
---

Division level map creation workshop
------------------------------------

*Originally posted on 12 Nov 2018, at: https://blog.gramener.com/division-level-maps-creation-workshop/*

Structurally, one could say India is governed at multiple levels: centre, State, Divisions, Districts, Sub-districts, Blocks, and Villages. Every state has its own governing strategy preferences. In some states, groups of districts are categorized under one or more divisions.

Indian administration and political boundary shapefiles that are [available](https://github.com/datameet/maps) so far are district boundaries for states (hence country), village boundaries for states, and tehsil (administrative division) boundaries for states. Similarly, we lack map shapefiles at Divisions and Blocks administrative levels. Recently, we organized an [open workshop](https://www.meetup.com/GeoHYD/events/255665421/) to create division level maps. We detail our experience here.

## Division level maps workshop details

### Task
The goal of the workshop was to create division-level map files (TopoJSON) using district-level map files of Indian states.

### Format
Divide the participants into groups and let the individuals volunteer to pick the states for which they wanted to create the division level maps.

### Pre-workshop preparation
Initially, we kicked-off with the list of states for which division information is readily available on Wiki. This was followed by preparation on team creation, looking for divisions data for the non-Wiki listed states, logistics of workshop creation (sharing with the wider community, engaging internal teams), doing dry runs on map creation — I created a map file representing six regions (northern, southern, north-eastern, western, central, eastern) of India.

![Input file — Chhattisgarh districts missing]()

### How
For ease of the participants, we created a tutorial to guide them on the map creation. The Prerequisites for the workshop was qGIS software, which is a popular open source tool to create and edit maps.

### Output
We released the division level maps with the data community (Datameet). You can get the TopoJSON formatted files for 16 states on the datameet GitHub repository. Further, we made the division level maps available as Excel maps. One can easily edit Excel maps, fit the data and choose a custom color range (YouTube tutorial). If you’re looking to use the TopoJSON files and create a solution, you can use Mapbox, ArcGIS, data wrapper, or kepler.gl. If you’d just like to see the basic output visit mapshaper.org and upload one of the JSON files.

![assam divisions map](https://blog.gramener.com/wp-content/uploads/2018/11/map-2.png)

Output file — Assam Divisions

### Challenges
We ran into few challenges making qGIS work on Windows machines. qGIS v2.18 downloadable worked fine while few of us ran into getting the v3 work.

It was an engaging and good learning experience for everyone involved. We hope to organize more such events. If you use these maps to create a solution or visualize your interest set of data please let us know!

Note: This post is written and presented by Bhanu Kishore Kamapantula, Senior Data Scientist at Gramener.

