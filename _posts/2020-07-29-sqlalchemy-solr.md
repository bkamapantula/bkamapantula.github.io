---
layout: post
tags: technology
---

# SQLAlchemy Solr

Following my [previous post](https://bkamapantula.github.io/2020/07/20/solr-tableau.html) on connecting `Apache Solr` with `Tableau`, we explored possible `sqlalchemy` friendly `Solr` connectors.

## sqlalchemy-solr
[sqlalchemy-solr](https://github.com/aadel/sqlalchemy-solr/) is an [external](https://docs.sqlalchemy.org/en/13/dialects/index.html#external-dialects) `sqlalchemy` dialect to connect with Solr.

After debugging couple of days to integrate here are quite a few important learnings:

- `sqlachemy-solr` uses `/sql` handler in Solr. You can review all available handlers in your collection at: `http://localhost:8983/solr/techproducts/config`
- for `/sql` handler to work, Solr must be configured in cloud mode.
  - Use `./bin/solr -e cloud` to setup 2 shards, 2 replicas (in each shard) setup for demonstration purposes. This uses example configuration.
  - Use `./bin/post -c techproducts example/exampledocs/*.xml` to index data. Here, `techproducts` is the collection name I created.
- columns cannot be arbitrarily picked for querying. The underlying schema needs to support it. For example, columns that have `docValues=true` attribute can be queried.

Once setup you can review the status of the cloud as below. I found this extremely useful to debug when queries were bouncing, turned out one of the replicas were down in each shard.

![sample solr cloud setup](https://i.postimg.cc/Hk3Zk4Kq/solr-cloud.png)

### via sqlalchemy

We could use `sqlalchemy-solr` and connect as below:

```py
# note the /sql at the end of connection string
conn_str = "solr://localhost:8983/solr/techproducts/sql"

engine = sqlalchemy.create_engine(conn_str)
conn = engine.connect()
```

Installing `sqlalchemy-solr` registers `solr://` (beginning of the connection string above) as a valid `sqlalchemy` dialect.

We can now query the data.

```py
results = conn.execute("SELECT id FROM techproducts limit 10")
results = conn.execute("SELECT genre_s FROM techproducts ORDER BY type LIMIT 20")
```

### via Gramex

`Gramex` [supports](https://learn.gramener.com/guide/formhandler/) database connections via `sqlalchemy`. This allows us to query and process data using an `REST` `API` approach. `SQL` queries are supported too.

```yaml
url: 'mysql+pymysql://$USER:$PASS@server/db'    # Reads from MySQL
table: sales

url: 'postgresql://$USER:$PASS@server/db'       # Reads from PostgreSQL
table: sales

url: 'oracle://$USER:$PASS@server/db'           # Reads from Oracle
table: sales

url: 'mssql+pyodbc://$USER:$PASS@dsn'           # Reads from MS SQL
table: sales

url: 'sqlite:///D:/path/to/file.db'             # Reads from SQLite
table: sales

```

We can connect to Solr endpoint as below

```py
# handler is a request object with reference to user details, URL arguments etc.
results = gramex.data.filter(conn_str, table='techproducts', args=handler.args)

"""
handler.args can be any combination of URL params
?_by=genre_s&_c=id -- groups by genre_s and shows the groups
?_c=id&_limit=10   -- show only id column, limit by 10 records
"""
```
