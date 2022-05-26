---
layout: post
tags: technology travel
---

Let's visit UNESCO heritage sites
----------------------------------

## Background
India has 40 UNESCO heritage sites ([website](https://whc.unesco.org/en/statesparties/in)) categorized under natural, cultural and mixed sections. Naturally, I would like to visit them.

I got interested in identifying the time it would take me to visit them. Then I got interested in mapping out the places on an interactive map.

<iframe src="https://www.google.com/maps/d/embed?mid=1BDAmWg_y5pETZ2qKlYXsd5g0tx8XIomD&ehbc=2E312F" width="640" height="480"></iframe>

Since there are a lot of them, assuming one has a car, how would one visit all the sites without visting any site more than once?

## Version 2
As the version 1 turned out to be factually incorrect (determined 39000 Kms as shortest path), I manually mapped the sites starting from `Group of Monuments at Mahabalipuram` in the Southern India.

This may not be the shortest overall path but might be closest to the shortest path. The total distance determined is little over 15000 KMs.

### Starting from South

TBD

### Caveats

Google maps couldn't find distances to three sites accurately:

a) Sundarban National Park -- There isn't a reliable Maps direction to this exact location in wetlands. The nearest location Maps found the directions to here from `Kaziranga National Park`, is near `Hamilton Island`.
b) Khangchendzonga National Park -- High in the mountains, Maps couldn't reliably find driving directions to this site. The nearest location Maps found the directions to here from `Darjeeling Himalayan Railways`, is `Sakkyong (Sikkim)`.
c) Valley of Flowers National Park -- High in the mountains, Maps couldn't reliably find driving directions to this site. The nearest location Maps found the directions to here from `The Great Himalayan National Park(office)`, is `Mundoli (Uttarakhand)`.


## Version 1

This approach inadvertently produced an overall distance that is longer than expected and unintuitive for explanation. I'm leaving it here for reference for any interested readers.

<pre><code><del>
## Travelling salesman problem (TSP)
For the keen observers, this falls right into the alley of travelling salesman problem ([Wiki](https://en.wikipedia.org/wiki/Travelling_salesman_problem)).

There are sub-optimal solutions for this problem but no perfect solution.

MLRose ([Documentation](https://mlrose.readthedocs.io/en/stable/index.html)), a `Python` library, offers genetic algorithms that solve for sub-optimal solutions for TSP. It requires pair-wise distances in an array of tuple format and solves for maximization or a minimization problem.

To determine the pair-wise distances between every two sites, Distance Matrix API ([Documentation](https://developers.google.com/maps/documentation/distance-matrix/)) is quite handy. It could find distances between most pairs except when three sites (Khangchendzonga National Park, 
Sundarban National Park, Valley of Flowers National Park) were involved.

Once pair-wise distances are determined, they are passed to the utility function that optimizes for the shortest distance. The resultant order of sites are mapped out in the visual.
</del></code></pre>

## Next

Using actual directions as paths between the sites will be more intuitive. Since, Directions API is different from Distance Matrix API pair-wise directions need to be looked up again.

I tried annotating the lines between sites with the respective distances. As it took a long time to render, I discarded the idea. I'll revisit it sometime later.

What else are you interested to do with this data? Let me know on Twitter (DM [@thoughtisdead](https://twitter.com/thoughtisdead/))
