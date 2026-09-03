# VPN Connection Issues

## Symptom

The user cannot connect to the VPN, or connects successfully but cannot
reach internal resources.

## Possible Causes

- Incorrect or expired VPN credentials.
- Outdated VPN client software.
- A local internet connection issue.
- Firewall or antivirus software blocking the VPN connection.
- A VPN server or licensing issue on the company side.
- A split tunneling or routing misconfiguration.

## Step-by-step Resolution

1. Confirm the user has a working internet connection outside of the VPN.
2. Confirm the VPN credentials are correct and not expired.
3. Check that the VPN client is up to date, and update it if needed.
4. Restart the VPN client and attempt to reconnect.
5. If the VPN connects but resources are unreachable, confirm the client
   was assigned an IP address.
6. Ping the internal gateway or a known internal resource to test
   connectivity.
7. Temporarily disable third-party firewall or antivirus software to rule
   out blocking, then re-enable it afterward.
8. Clear the VPN client's cached settings and reconnect.
9. Confirm the user can reach internal resources before closing the ticket.

## When to Escalate

- The VPN client connects, but internal resources stay unreachable after
  basic checks.
- Multiple users report VPN issues at the same time, which points to a
  server-side problem.
- Authentication fails even with confirmed correct credentials, which
  points to a directory or licensing issue.
- Fixing the issue requires firewall rule changes or VPN server
  configuration access you don't have.

---

**Still stuck?** [Submit a ticket](https://helpdesk-frontend-idzb.onrender.com/?source=kb_network_vpn){: target="_blank" rel="noopener" } and reference this article. The agent will already know what steps you've tried.
