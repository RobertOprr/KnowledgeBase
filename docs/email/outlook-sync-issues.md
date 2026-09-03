# Email / Outlook Sync Problems

## Symptom

New emails are not appearing in Outlook, or sent emails are stuck in the
outbox.

## Possible Causes

- Outlook is in "Work Offline" mode.
- An internet connection issue.
- The mailbox is full or near its storage limit.
- A corrupted local data file (OST).
- An Outlook profile issue.
- An email service outage.

## Step-by-step Resolution

1. Confirm the user has a working internet connection.
2. Check whether Outlook is in "Work Offline" mode, and switch it back
   online if so.
3. Perform a manual Send/Receive on all folders.
4. Confirm the mailbox is not full or close to its storage limit.
5. Test webmail (browser-based email) to see if the issue is specific to
   the Outlook desktop app.
6. If webmail works but the desktop app doesn't, close Outlook and
   rename the local data file so Outlook rebuilds and resyncs it.
7. Repair the Office installation if the issue continues.
8. Create a new Outlook profile as a last resort before escalating.
9. Confirm new emails are arriving and sent items are delivering before
   closing the ticket.

## When to Escalate

- Webmail also fails, which points to a mailbox or service-side issue.
- The mailbox is full and needs a storage or archiving policy change.
- Multiple users are affected, suggesting an email service outage.
- The issue involves account permissions, shared mailboxes, or settings
  you cannot change at L1 level.

---

**Still stuck?** [Submit a ticket](https://helpdesk-frontend-idzb.onrender.com/?source=kb_email_outlook-sync){: target="_blank" rel="noopener" } and reference this article. The agent will already know what steps you've tried.
