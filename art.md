# Data art

### Suggestions

using Vega

 <div id="vis"></div>

 <script type="text/javascript">
// parse a spec and create a visualization view
function parse(spec) {
  vg.parse.spec(spec, function(chart) { chart({el:"#vis"}).update(); });
}

var spec = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "width": 800,
    "height": 800,
    "padding": 5,
    "autosize": "fit",
  
    "data": [
      {
        "name": "tree",
        "values": [
          {
            "id": 1,
            "name": "policy"
          },
          {
            "id": 3,
            "name": "an",
            "parent": 1
          },
          {
            "id": 22,
            "name": "an.1",
            "size": 1,
            "parent": 3
          },
          {
            "id": 21,
            "name": "an.3",
            "size": 1,
            "parent": 3
          },
          {
            "id": 4,
            "name": "dc",
            "parent": 1
          },
          {
            "id": 20,
            "name": "dc.2",
            "size": 18,
            "parent": 4
          },
          {
            "id": 19,
            "name": "dc.3",
            "size": 2,
            "parent": 4
          },
          {
            "id": 5,
            "name": "l1",
            "parent": 1
          },
          {
            "id": 18,
            "name": "l1.5",
            "size": 1,
            "parent": 5
          },
          {
            "id": 6,
            "name": "pm",
            "parent": 1
          },
          {
            "id": 7,
            "name": "qa",
            "parent": 1
          },
          {
            "id": 8,
            "name": "sales",
            "parent": 1
          },
          {
            "id": 10,
            "name": "pm.3",
            "size": 5,
            "parent": 6
          },
          {
            "id": 11,
            "name": "pm.4",
            "size": 1,
            "parent": 6
          },
          {
            "id": 12,
            "name": "qa.1",
            "size": 5,
            "parent": 7
          },
          {
            "id": 13,
            "name": "qa.2",
            "size": 1,
            "parent": 7
          },
          {
            "id": 14,
            "name": "sales.5",
            "size": 1,
            "parent": 8
          },
          {
            "id": 9,
            "name": "tech",
            "parent": 1
          },
          {
            "id": 15,
            "name": "tech.1",
            "size": 8,
            "parent": 9
          },
          {
            "id": 16,
            "name": "tech.2",
            "size": 3,
            "parent": 9
          },
          {
            "id": 17,
            "name": "tech.3",
            "size": 11,
            "parent": 9
          }
        ],
        "transform": [
          {
            "type": "stratify",
            "key": "id",
            "parentKey": "parent"
          },
          {
            "type": "pack",
            "field": "size",
            "sort": {"field": "value"},
            "size": [{"signal": "width"}, {"signal": "height"}]
          }
        ]
      }
    ],
  
    "scales": [
      {
        "name": "color",
        "type": "ordinal",
        "domain": {"data": "tree", "field": "depth"},
        "range": {"scheme": "viridis"}
      }
    ],
  
    "marks": [
      {
        "type": "symbol",
        "from": {"data": "tree"},
        "encode": {
          "enter": {
            "shape": {"value": "circle"},
            "fill": {"scale": "color", "field": "depth"},
            "tooltip": {"signal": "datum.name + (datum.size ? ', ' + datum.size + ' bytes' : '')"}
          },
          "update": {
            "x": {"field": "x"},
            "y": {"field": "y"},
            "size": {"signal": "4 * datum.r * datum.r"},
            "stroke": {"value": "white"},
            "strokeWidth": {"value": 0.5}
          },
          "hover": {
            "stroke": {"value": "red"},
            "strokeWidth": {"value": 2}
          }
        }
      }
    ]
  }
  
parse(spec) 
</script>

### Team communication

![team communication](../images/team-communication.png)

### Life expectancy of countries

Our world in data is a great initiative to show world's progress.

I curated a specific indicator for some countries with a focus on India.

 ![life expectancy front](../images/card-front-life-expectancy.png)

 ![life expectancy back](../images/card-back-life-expectancy.png)

### Warming stripes

[Show your stripes](https://showyourstripes.info/) is an excellent way to introduce climate change topic.

Below is a warming stripe for India for the years 1901 to 2018.

![India average temperature the past 100 years](../images/stripes-india.png)

- Each year is represented as a vertical stripe.
- Leftmost stripe represents 1901 year while the rightmost strike represents 2018 year.
- Color of a stripe represents the average temperate for a specific year.

**Note**

I work with data all the time. I believe that a well made data visualization that conveys a point immediately is good art. While there are variations of what art means to people my work will focus on art created out of data.
