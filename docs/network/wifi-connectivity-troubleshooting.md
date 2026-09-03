# Wi-Fi and Network Connectivity Troubleshooting

## Symptom

The user cannot connect to Wi-Fi, or is connected but has no internet
access.

## Possible Causes

- Wi-Fi is turned off on the device.
- The wrong Wi-Fi password was entered.
- The device is out of range or the signal is weak.
- A router or access point issue is affecting multiple users.
- An IP address conflict or an expired DHCP lease.
- An outdated network adapter driver.

## Step-by-step Resolution

1. Confirm Wi-Fi is enabled on the device.
2. Check whether other users nearby are also affected. If they are, treat
   this as a network-wide issue rather than a single-device problem.
3. Ask the user to forget the network and reconnect, entering the password
   carefully.
4. Move closer to the router or access point and check the signal strength.
5. Restart the router or access point if you have access to it, then wait
   1–2 minutes before reconnecting.
6. On the user's device, release and renew the IP address (`ipconfig
   /release` then `ipconfig /renew` on Windows).
7. Flush DNS (`ipconfig /flushdns`) and try browsing again.
8. If the issue is isolated to this device, update the network adapter
   driver.
9. Confirm the user can browse the internet and reach internal resources
   before closing the ticket.

## When to Escalate

- Multiple users at the same location are affected, which points to a
  router, switch, or ISP issue.
- The issue persists after a driver update and a full network reset.
- You suspect a hardware fault in the router, switch, or access point.
- The user needs access to internal-only resources that require network
  team configuration.
