# Non-virus related deaths in India

During the Covid-19 driven lockdowns (different phases) there have been hundreds of reports of deaths related to starvation, exhaustion (due to walking), alcohol withdrawal among other reasons.

Thejesh from Datameet shared this data on his [website](https://thejeshgn.com/projects/covid19-india/non-virus-deaths/). This data has been curated and maintained by [him](https://twitter.com/thej), [Aman](https://twitter.com/CB_Aman) (Assistant Professor of Legal Practice at Jindal Global School of Law), [Kanika Sharma](https://twitter.com/_kanikas_) (PhD student at Emory University), [Krushna](https://twitter.com/anhsurk) (PhD student at Syracuse University).

While there are over 611 (as of 22nd May) such [reported deaths](https://twitter.com/_kanikas_/status/1264219703637139461), this map showcases 476 incidents (resulting in ~560 deaths) that they were able to track from news reports.

<iframe title="Non-virus deaths in India" aria-label="Map" id="datawrapper-chart-hjOsj" src="https://datawrapper.dwcdn.net/hjOsj/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="652"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}}))}();
</script>

## Update

### 31st May
- We published the names of all those who died on BehanBox at http://covid19indiaresponse.behanbox.com/
- I cross-posted this on my personal blog: https://bkamapantula.github.io/nonvirusdeaths/

## Notes

- [Source data](https://github.com/datameet/covid19/blob/master/data/non_virus_deaths.json) from datameet.
- [Version](https://docs.google.com/spreadsheets/d/14t01Pia4A6KoyVZx38M7j9T0z9jFnohSCrnT8uOm4EE/edit#gid=876948547) used for the map maintained by me with the below changes:
  - create address column as a combination of these columns: `value_location`, `value_district`, `value_state` using Google Sheets. 
  - derive latitude, longitude (from `address` column) using Geocode by Awesome Table Google Sheets plugin.
  - derive age column (from `value__name_age` column) using REGEXEXTRACT function in Google Sheets.
  - remove instances such as "his brother", "his wife" etc. before a person's name. specific instances:
    - "his brother Jeetendra (30) and uncle Mohan Nishad (40)"
    - "Ashfaq (75), Rajkumar Yadav (52), [both of whom died on April 11]"
    - "his wife Bhooli (60)", "his wife Gurjinder Kaur (55)", "his wife Tulasi (60)"
  - add 9 names from a [Tweet](https://mobile.twitter.com/rachelchitra/status/1246960136947630086).
  - removed extra phrases such as "passed away on..."
  - removed "Other details" instance
