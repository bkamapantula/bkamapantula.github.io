---
layout: post
tags: rpi ubuntu
---

# Raspberry Pi

I got my hands on a Raspberry Pi (RPi, hereafter) to experiment a bit.

![raspberry pi os](https://www.raspberrypi.org/app/uploads/2020/05/Raspberry-Pi-OS-downloads-image-150x150-1.png)

I realized configuring [pi-hole](https://pi-hole.net/) to improve my internet experience should be the first thing to do. Official [RPi](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) and Pi-hole documentation to set it up was a breeze. While I did install VNCServer for remote desktop I ended up not using it much. Headless configuration was fairly straightforward.

For those unfamiliar with command-line interface, once you login to RPi from VNC Viewer change the password.

For devices to use Pi-hole, I had to update DHCP/DNS settings with RPi's details ([how-to-guide](https://discourse.pi-hole.net/t/how-do-i-configure-my-devices-to-use-pi-hole-as-their-dns-server/245)). Configuring static IP addresses for the devices led me to read and re-discover how internet works. I thoroughly enjoyed it.

Pi-hole also comes with a GUI panel to monitor the requests along with a range of other options which is convenient.

## Steps

- Before you begin, monitor the active client table list on your router on browser. It'll give you a sense of the current devices. If hostnames are shown as `Unknown`, use MAC addresses as reference to set static IP addresses for devices (that is, use different addresses).
- In step 5 [2] ensure the IP address is different from the router's IP address. Otherwise it'll prompt a warning in the next step.
- I followed [2] as a visual guide for the setup. I picked Cloudflare for DNS in Step 6.
- ~~[1] has good screenshots against each step which I found useful to update DNS settings in individual devices.~~
- ~~I added hostnames against the static IPs in RPi's `/etc/hosts`~~
- While I originally set static IPs with DNS on individual devices, I updated the router DNS configuration. This is easier to maintain. You should constantly monitor since any disruptions will impact regular experience.

![router active client table settings](../../../../images/router-act.png)
![router active client table wireless settings](../../../../images/router-act-wireless.png)

DNS lookups were briefly lost on the Pi-hole and after debugging an hour I realized I improperly configured `ufw` (uncomplicated firewall). I defined the rules from Pi-hole's [Firewall docs](https://docs.pi-hole.net/main/prerequisites/#firewalls) and things got back to normal.

## Notes

- If you are at a place where power cuts happen infrequently you need to plan in advance and ensure RPi has continuous power supply. Otherwise the connected devices won't have WiFi!
- Keep it away from extreme temperatures, water.
- Get a case, micro HDMI (RPi 4 has two micro HDMI slots) to HDMI cable or convertor if you'd like to view RPi on an external monitor.

## What next?

RPi still has lot of computing power available and so I'm exploring the below ideas:

- ~~Expand pi-hole to other devices~~ All devices now use Pi-hole.
- ~~Enable DoH aka DNS-over-HTTPS~~ I configured Cloudflared for DoH.
- Explore hardware project ideas

# References

1. How to setup pi-hole on raspberry pi? by Techwiser. [Link](https://techwiser.com/how-to-set-up-pi-hole-on-raspberry-pi-4/).
2. Pi-hole setup by Pi my life up. [Link](https://pimylifeup.com/raspberry-pi-pi-hole/)
3. Official documentation by Pi-hole, [Link](https://docs.pi-hole.net/)
