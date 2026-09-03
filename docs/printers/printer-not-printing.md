# Printer Not Printing

## Symptom

The user sends a print job, but nothing prints, or the job stays stuck in
the queue.

## Possible Causes

- The printer is powered off or offline.
- The printer is out of paper or ink/toner, or has a paper jam.
- A stuck print job is blocking later jobs in the queue.
- The wrong printer is selected as the default.
- The printer driver is outdated, corrupted, or missing.
- A network printer is unreachable due to an IP or connectivity issue.

## Step-by-step Resolution

1. Confirm the printer is powered on and shows "Ready" on its display.
2. Check for paper jams, empty trays, or low ink/toner warnings.
3. Confirm the correct printer is selected as the default on the user's
   device.
4. Open the print queue, clear any stuck jobs, and try printing a test
   page.
5. If the printer is on the network, ping its IP address to confirm it's
   reachable.
6. Restart the Print Spooler service on the user's device.
7. Reinstall or update the printer driver if the issue continues.
8. Print a test page directly from the printer's own menu to confirm the
   printer itself is functioning.
9. Confirm the user's original document prints successfully before closing
   the ticket.

## When to Escalate

- The printer is unreachable on the network and you don't have access to
  check switch or port status.
- The issue affects every user trying to print to this printer, which
  points to a shared driver or print server problem.
- The printer needs a firmware update or hardware repair.
- Print server or spooler issues are affecting multiple printers at once.

---

**Still stuck?** [Submit a ticket](https://helpdesk-frontend-idzb.onrender.com/?source=kb_printers_not-printing){: target="_blank" rel="noopener" } and reference this article. The agent will already know what steps you've tried.
