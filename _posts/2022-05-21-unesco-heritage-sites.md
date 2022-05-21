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

## Travelling salesman problem (TSP)
For the keen observers, this falls right into the alley of travelling salesman problem ([Wiki](https://en.wikipedia.org/wiki/Travelling_salesman_problem)).

There are sub-optimal solutions for this problem but no perfect solution.

MLRose ([Documentation](https://mlrose.readthedocs.io/en/stable/index.html)), a `Python` library, offers genetic algorithms that solve for sub-optimal solutions for TSP. It requires pair-wise distances in an array of tuple format and solves for maximization or a minimization problem.

To determine the pair-wise distances between every two sites, Distance Matrix API ([Documentation](https://developers.google.com/maps/documentation/distance-matrix/)) is quite handy. It could find distances between most pairs except when three sites (Khangchendzonga National Park, 
Sundarban National Park, Valley of Flowers National Park) were involved.

Once pair-wise distances are determined, they are passed to the utility function that optimizes for the shortest distance. The resultant order of sites are mapped out in the visual.

![heritage-sites](https://user-images.githubusercontent.com/1143687/169645074-fe7e2c13-f0b2-469b-8786-e1f3b05ab67b.gif)

