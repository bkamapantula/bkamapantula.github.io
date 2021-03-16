---
layout: post
tags: data dataviz
---

# Data storytelling with maps

[Story Labs](https://gramener.com/storylabs/) at Gramener is working on a [Data Storytelling Framework](https://gramener.com/storylabs-publications/defining-data-storytelling). In total, there are nine explanation structures and eight sequences. One of the formats is narration through [Map Stories](https://gramener.com/storylabs-publications/map-stories).

Since maps fascinate me, I'm interested to tryout few example datasets and try to narrate few important aspects from them. Consider the Obesity Rate (%) in Virginia state counties across the years 2019 and 2020.

I was curious to know the Obesity Rate in the county I stayed for over four years and realized that the rate of change (difference) from 2019 to 2020 isn't high (+0.8%). Although, in raw numbers it could still be high. That prompted me to look for the counties that witnessed high rate of change (on this, more towards the end).

### Definitions

BMI is calculated as the ratio of weight in kilograms to the square of height in meters.

Obesity Rate is defined as the ratio of number of patients with obesity (BMI>= 30 kg/m<sup>2</sup>) to the number of patients in the survey.

Unfortunately, I couldn't find the distribution of demographics data to know the survey numbers per year. Hence, the change in Obesity Rate is hard to explain from this data source alone.

## Virginia Obesity Rates

![Virginia Obesity Rate 2019](https://i.postimg.cc/6pRpmwP0/virginia-obesity-2019.png)

*Virginia Obesity Rate 2019. Each county is colored using its Obesity Rate in 2019.*

![Virginia Obesity Rate 2020](https://i.postimg.cc/wTnB23wM/virginia-obesity-2020.png)

*Virginia Obesity Rate 2020. Each county is colored using its Obesity Rate in 2020.*

### Juxtaposing

[Knightlab](https://knightlab.northwestern.edu/)'s [Juxtapose](https://juxtapose.knightlab.com/) allows us to create juxtapositions easily and lets users swipe to notice the difference. This is an intuitive format that works well at the lowest granular level.

Below is a representation of the same images from above. It follows the _Then and Now_ explanation structure and _Swipe_ sequence format (E4S7) as described by [Story Labs](https://gramener.com/storylabs-publications/defining-data-storytelling).

<iframe frameborder="0" class="juxtapose" width="100%" height="511" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=56c8ed98-8556-11eb-83c8-ebb5d6f907df"></iframe>

*Swipe the slider to right or left to view 2019 or 2020 map*.

The images are hand crafted. Here, only two regions are annotated.

The intention here is not to automate the image creation but to discover possibilities in bringing out details well.

Arguably, each static image could be an interactive. Hovering on each county could get respective values but it supersedes the original intention of juxtaposing regions for immediate comparison.

#### Scale drift

Scale changes from 2019 to 2020 owing to the changes in minimum and maximum Obesity rate values. Comparing these values by juxtaposing next to one another is tricky since underlying color is no longer the same. Further, human vision can't pick subtle color change that's mapped to data, easily.

An alternative approach is mapping relative change and using a single visual. 

### Relative change

Mapping relative Obesity rate of change reveals the necessary information and is crucial to drive home the point on the extreme performing counties. Below table shows a subset of data rows (note that the rate values are rounded off for 2019, 2020 columns):

| State | County | Obesity rate 2019 | Obesity rate 2020 | difference |
| ----- | ------ | -------------- | -------------- | ---------- |
| Virginia | Falls Church City | 28 | 20 | -8.7
| Virginia | Surry | 34 | 26 | -7.7 |
| Virginia | Lexington City | 27 | 19 | -7.7 |

In the below illustration, we use the `difference` column from the data table to color the county.

![Obesity Rate change from 2019 to 2020](https://user-images.githubusercontent.com/1143687/111248307-a54ffe00-862f-11eb-99dd-834fcbf21264.png)

*Change in Obesity Rate from 2019 to 2020 in Virginia counties*.

#### Interactive

Interactive version of the earlier illustration is below.

<iframe title="Obesity rate change in Virginia counties from 2019 to 2020" aria-label="Map" id="datawrapper-chart-aIN3l" src="https://datawrapper.dwcdn.net/aIN3l/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="464"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}}))}();
</script>

I picked a color scale that highlights the extremes well. This illustration will be useful for policy makers, researchers to understand the underlying changes better. A regular user (ex: a citizen) may be more interested in understanding their neighborhood and may prefer a different representation.

I'll be exploring other Data Storytelling Structure and Sequence formats using different datasets soon.

## Notes

1. Data is sourced from the [County Health Rankings Project](https://www.countyhealthrankings.org/).
2. Images are created using Datawrapper, Google Drawings.
