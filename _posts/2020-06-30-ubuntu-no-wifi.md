# Ubuntu, linux kernel, missing wifi adapter

As it has been a while, I restarted Ubuntu this morning. Wi-Fi wouldn't connect and its panel displays "No Wi-Fi adapter found".

Multiple answers online suggested to upgrade Ubuntu, update Broadcom driver, boot from Ubuntu ISO and update the settings. Dell XPS I've has Killer Wi-Fi adapter, so the second solution is ruled out. This laptop doesn't have an ethernet port so updates are ruled out.

After window shopping for a bit I realized I've an USB-C to ethernet adapter I ordered months ago. Plugged it in for updating the drivers. To know the right network adapter name, I punched in some commands (`lspci`, `lshw`).

One Unix Stack Exchange [1] answer was enlightening. Suggestion one was to re-build the kernel modules and suggestion one was to change the kernel to older version in grub.

I run Ubuntu 18.04 which uses 5.3.0-1026-gke linux kernel and its respective directory `/lib/modules/5.3.0-1026-gke/build` didn't exist. Older kernel versions had this. I then realized kernel updates must have broken. I then opted for the second suggestion which is to change the underlying linux kernel.

I picked the most recent kernel where I didn't have the Wi-Fi discovery issue.

```bash
grep gnulinux /boot/grub/grub.cfg      # find out available kernel images
sudo vi /etc/default/grub              # edit GRUB_DEFAULT value as described in [2]
sudo update grub                       # for next reboot
sudo shutdown -r now                   # restart the machine and rejoice
```

Both wired and wireless connections now work fine. Next step is to spend some time in the weekend to understand what broke with 5.3.0-1026-gke build and Wi-Fi adapter.

# References

1. No ethernet/wireless connection after dist upgrade by Unix Stack Exchange. [Link](https://unix.stackexchange.com/questions/93471/no-ethernet-wireless-connection-after-dist-upgrade-network-unclaimed).
2. Change default kernel in Ubuntu by kowalczyk.me. [Link](https://kowalczyk.me/change-default-kernel-in-ubuntu-18-04/).
