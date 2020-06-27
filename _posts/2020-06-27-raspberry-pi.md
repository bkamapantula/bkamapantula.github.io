# Raspberry Pi

I got my hands on a Raspberry Pi (RPi, hereafter) to experiment a bit.

![raspberry pi os](https://www.raspberrypi.org/app/uploads/2020/05/Raspberry-Pi-OS-downloads-image-150x150-1.png)

I realized configuring [pi-hole](https://pi-hole.net/) to improve my internet experience should be the first thing to do. Official [RPi](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) and Pi-hole documentation to set it up was a breeze. While I did install VNCServer for remote desktop I ended up not using it much. Headless configuration was fairly straightforward.

For devices to use Pi-hole, I had to update DHCP/DNS settings with RPi's details ([how-to-guide](https://discourse.pi-hole.net/t/how-do-i-configure-my-devices-to-use-pi-hole-as-their-dns-server/245)). Configuring static IP addresses for the devices led me to read and re-discover how internet works. I thoroughly enjoyed it.

Pi-hole also comes with a GUI panel to monitor the requests along with a range of other options which is convenient.

## What next?

- Expand pi-hole to other devices
- Enable DoH aka DNS-over-HTTPS
- Explore hardware project ideas
