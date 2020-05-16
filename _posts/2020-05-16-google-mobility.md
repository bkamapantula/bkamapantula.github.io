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

<div id="vis"></div>

## Without Jammu and Kashmir
Jammu and Kashmir looks like an outlier in all its activities except residential perhaps owing to prolonged lockdown since August 2019 following the removal of article 370. Below is the activity map without Jammu and Kashmir when changes are more striking.

<div id="vis-wo-jk"></div>
<script src="https://vega.github.io/vega/vega.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-tooltip/0.23.0/vega-tooltip.min.js"></script>
<script type="text/javascript">
var spec_url = "https://gist.githubusercontent.com/bkamapantula/30a39e134578c7b5bbd5e2f3786c90c6/raw/4c18d9be006059389895bb8e1f77ac802153438b/heatmap-google-mobility-spec.json" 
var spec_url_wo_jk = "https://gist.githubusercontent.com/bkamapantula/30a39e134578c7b5bbd5e2f3786c90c6/raw/fc26a9cb4687269350f966e17d6c96f0e021f1fe/heatmap-without-jk.json"

fetch(spec_url)
  .then(res => res.json())
  .then(spec => render(spec, '#vis'))
  .catch(err => console.error(err));

fetch(spec_url_wo_jk)
  .then(res => res.json())
  .then(spec => render(spec, '#vis-wo-jk'))
  .catch(err => console.error(err));

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
