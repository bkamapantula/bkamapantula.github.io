---
layout: post
tags: technology
---

Affordable devices for learning
----------------------------------

*Update - 11th September: a friend added several devices to the list that I'm reproducing [below](#other-devices).*

## Background

Pandemic induced lockdowns have worsened the teaching and learning experience for educators and students. The transition to the online learning was/is extremely hard given the challenges in internet connectivity, change in communication modes, infrastructure, availability of time for families.

This is more pronounced on the communities in remote parts of India where the necessary infrastructure isn't present to handle the surge in online teaching and learning.

Several fundraisers were started to address portions of these in order to improve the learning experience for students. As part of the fundraisers, laptops/smartphones/tablets are sought out as tools for learning purposes. However, not all devices are equal given the fragmented world of software, app store updates, operating systems.

In this post, I review a set of devices using a set of criteria.

## Criteria

Below is the criteria I used to buy devices for [Collab Place](https://collab.place).

1. The device should be *affordable*.
2. The device should be *flexible*. I should not need an exclusive app store to access software.
3. The device should be *hackable*. It should give me control to install whatever I'd like.

A friend enquired what I meant by *affordable*. For a comparable price, a device (smartphone or tablet or computer) should offer similar set of features. The common denominator amount is the *affordable* price.

An alternative way to approach affordability is the minimum price required to get a good computing experience abiding to *flexibility* and *hackability*.

## Options

Given the criteria, a huge set of devices filter themselves out. To be explicit, any device over and above the price of 25k INR (~336 USD) don't make the cut for this discussion.

I've considered laptops, chromebooks, smartphones and tablets in the past few months to recommend to students.

Chromebooks aren't available in Indian market as such and have to be imported from elsewhere which makes it an accessibility issue.

### Coconics

Coconics laptop ([Amazon](https://www.amazon.in/Coconics-Enabler-Intel®-Processors-Storage/dp/B08CDSJS34/2)) is a machine co-developed by the Kerala state government.

This device meets all three criteria.

It affordable (costs ~16k INR) but has not been available since early 2021. It's lack of availability makes it a no-go.

### Tablets

Tablets are regularly sought out for learning.

Huawei's Mediapad T5 ([Amazon](https://www.amazon.in/dp/B087VCQ787/) - ~17k, unavailable), Lenovo Tab M10 ([Amazon](https://www.amazon.in/Lenovo-10-1-inch-Wi-Fi-Metallic/dp/B08ZYT3MGD/) - ~12k), Samsung Galaxy (>25k) are some of the options.

Some tablets meet the affordability criteria but aren't flexible and hackable.

They're portable but applications aren't as flexible as their web version counterparts and the form factor makes it a hard medium for effective learning.

A good tablet costs starting from ~15k INR which puts it in the range of custom assembled affordable computers (read below).

### Smartphones

Large smartphones are also sought out for learning. Smartphones ubiquitousness and versatility makes them an option for people. However, these are the most restrictive hardware for learning.

At best, these devices (some which are on sale) could be *affordable* but definitely are neither flexible nor hackable.

### Raspberry Pi based

Rasbperry Pi devices were introduced in the UK for the education community. A range of devices, an ecosystem around it make it an appealing choice.

For this post, I'll stick to Raspberry Pi 4 (RPi 4). RPi 4 is capable of running linux-based operating systems (these are lightweight compared to Windows OS) and hence can make use of the package distribution mechanisms that have grown over the decades.

RPi based computers range between ~10k-15k INR depending on the configuration. However, these don't ship with certain accessories like camera. Accessories can be attached as needed.

RPi 4 meets all three criteria.

Raspberry Pi based device is the most viable option among the listed options.

<iframe frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="652" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSOFFb7BOisSORRMjvTCMqO5Ye1USDFxyvlZnKKJDCjUTQX4jB20YhnbASfeNOWsdMPV8KOOx590ISM/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

Source: [Affordable devices](https://docs.google.com/spreadsheets/d/1Z4MFptwNGtMCAcJtvRU2ly91f6Dvyt0E1oUQBj0xE5w/edit?usp=sharing)

### Other devices

I haven't used any of the ones below but adding from a friend's recommendation. Most of the devices are over ~ 12k (that's more than twice the price of RPi 4) and with necessary accessories the price is bumped up by another 8-10k.

- Odroid H2, Asus Tinker Board
- Jetson Nano
  - [Amazon.in](https://www.amazon.in/Jetson-Nano-Development-Kit-Cortex®-A57/dp/B07QWLMR24/) has a listing price of ~12k INR.
- Udoo series
  - [Robu.in](https://robu.in/?s=udoo&product_cat=0&post_type=product) lists them although none are available currently. [Amazon.in](https://www.amazon.in/UDOO-SA69-0200-1000-C0-NEO-Extended-Educational/dp/B01JJ61Z2W/) has one available at ~5k INR.
- Up board series
  - [Robu.in](https://robu.in/?s=up+board&product_cat=0&post_type=product) lists couple of models although they aren't available currently. With a starting price of ~15k, it won't be as affordable as I'd like.
- Beaglebone
  - The beaglebone devices are quite useful. [Robu.in](https://robu.in/?s=beaglebone&product_cat=0&post_type=product) has a few models available.
- Intel NUC [Amazon](https://www.amazon.in/Intel-BOXNUC7CJYH1-Celeron-NUC-NUC7CJYH/dp/B07C67X1BP/)
  - This looks promising and is currently priced at ~13.5k INR.

[Here's a handy list](https://gist.github.com/anujdeshpande/5e9475a0c4cefebe1c5288576171a6ca) of Indian e-commerce stores that sell electronic components, curated by Anuj Deshpande and others.

## Out in the wild
For Collab Place, I bought:

- 2 Raspberry Pi desktop 400s ([thingbits](https://www.thingbits.in/products/raspberry-pi-4-desktop-kit-4gb-ram)),
- 1 Raspberry Pi 4B+ ([thingbits](https://www.thingbits.in/products/raspberry-pi-4-desktop-kit-4gb-ram))
- 2 Raspberry Pi Zero W ([thingbits](https://www.thingbits.in/products/raspberry-pi-zero-wh-zero-w-with-headers-v1-3))
  - 2 Raspberry Pi Zero W kits were gifted ([thingbits](https://www.thingbits.in/products/raspberry-pi-zero-w-starter-kit))
- 2 Raspberry Pi Picos ([thingbits](https://www.thingbits.in/products/raspberry-pi-pico))

The desktop RPi 400 and RPi 4B+ (+monitor) have served us well to teach and learn Scratch (visual programming interface), web programming and Python apart from consuming videos. These aren't used for live classes in our context.

If you would like to establish infrastructure in your region reach out to bhanu@collab.place. I'll be happy to discuss about it.
