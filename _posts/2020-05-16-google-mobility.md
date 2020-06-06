# India Google Mobility Data

Google released [mobility data](https://www.google.com/covid19/mobility/) for few key indicators based on activity levels (using location information) in grocery/pharmacy stores, workplaces, parks, residential places, retail/recreation and transit stations.

The baseline day is the median value from the 5‑week period Jan 3 – Feb 6, 2020 as reported in the [Help](https://support.google.com/covid19-mobility/answer/9824897?hl=en&ref_topic=9822927#baseline) page. Consider a data row:

```json
{
  "sub_region_1": "India",
  "date": "2020-03-10",
  "retail_and_recreation_percent_change_from_baseline": -19,
  "grocery_and_pharmacy_percent_change_from_baseline": -23,
  "parks_percent_change_from_baseline": -4,
  "transit_stations_percent_change_from_baseline": -22,
  "workplaces_percent_change_from_baseline": -44,
  "residential_percent_change_from_baseline": 11
}
```

## Key data aspects
- Numbers represent the rate of change of activity on 10th March 2020 against the baseline day's activity. 
- Except Residential activity all activity is measured as change in number of visitors.
- Residential activity is measured by the duration of time spent at homes.

## Visual
- Each row represents a region (ex: Kerala).
- Each column represents a day (ex: April 15).
- Each heatmap cell represents variation of an activity (ex: workplaces) on a single day captured by color.
- As India enforced lockdown all activities fell except that of residential homes. People followed janata curfew as requested by the Prime Minister on 22nd March as a precursor to the lockdown on 25th March. Activity patterns began to change since 22nd March.

<div id="vis"></div>

## Without Jammu and Kashmir
Jammu and Kashmir looks like an outlier in all its activities except residential perhaps owing to prolonged lockdown since August 2019 following the removal of article 370. Below is the activity map without Jammu and Kashmir when changes are more striking.

<div id="vis-wo-jk"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega/5.12.3/vega.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-tooltip/0.23.0/vega-tooltip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fetch-jsonp/1.0.6/fetch-jsonp.min.js"></script>
<script type="text/javascript">
  var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      printResult(x.responseText || '');
    };
    x.send(options.data);
  }

var spec_url = "https://gist.githubusercontent.com/bkamapantula/30a39e134578c7b5bbd5e2f3786c90c6/raw/1be3447725579a31fa476a364bad1bdffbde6011/heatmap-google-mobility-spec.json"

doCORSRequest({
  url: spec_url,
  method: 'GET',
  data: ""
}, function printResult(result) {
    var spec = JSON.parse(result)
    render(spec, "#vis")
    var mobility_data = spec.data.filter(function(d) { return d.name == "mobility" })[0]
    mobility_data.transform.push({"type": "filter", "expr": "datum.sub_region_1 != 'Jammu and Kashmir'"})
    render(spec, "#vis-wo-jk")
})

function render(spec, el) {
  view = new vega.View(vega.parse(spec), {
    renderer:  'svg',  // renderer (canvas or svg)
    container: el,   // parent DOM container
    hover:     true,       // enable hover processing
    tooltip: new vegaTooltip.Handler().call
  })
  return view.runAsync()
}
</script>

## Notes

- data cells (region on a date) with `null` values are ignored and will have empty cells in the heatmap.
- Lakshadweep has data available for only parks and workplace activities.
- Dadra and Nagar Haveli, Daman and Diu, Andaman and Nicobar Islands and Jammu & Kashmir have null values for certain days for different activities.
- Report data as on 2020-05-14 as reported by [Google Mobility reports](https://www.google.com/covid19/mobility/).

## Update

### 1 June
- Updated data from [May 29 reports](https://www.google.com/covid19/mobility/).

### 24 May
- Updated data from [May 21 reports](https://www.google.com/covid19/mobility/).
- Either due to change in browser behavior or due to change in data size `fetch()` failed citing CORS issue. I now use [cors anywhere](https://cors-anywhere.herokuapp.com/) app to fetch JSONs hosted on github gists.
- EVen with no change in date format, Vega seem to format date as epoch instead of the custom format. I changed `"format": {"parse": "auto", "type": "json"}` to `"format": {"parse": {"start": "date", "end": "date"}}` where `start`, `end` are annotation fields.
