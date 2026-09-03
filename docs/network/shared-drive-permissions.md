# Shared Drive and File Permission Issues

## Symptom

The user cannot access a shared network drive or folder, or gets an
"Access Denied" error trying to open a specific file.

## Possible Causes

- The user isn't a member of the security group that grants access.
- The shared drive isn't mapped, or the mapping is broken.
- The user's account permissions were recently changed.
- A network connectivity issue is preventing the share from being
  reached.
- The file is locked because another user has it open.
- The share or the server hosting it is temporarily unavailable.

## Step-by-step Resolution

1. Confirm the exact path the user is trying to access and the exact
   error message.
2. Confirm the user has a working network connection.
3. Try accessing the share yourself, or have another user try, to check
   whether it's a broad outage or specific to this user.
4. Verify the user's group membership includes the group that grants
   access to this share.
5. Check whether the drive mapping exists and points to the correct
   path, and remap it if broken.
6. If the error is on a specific file rather than the whole share, check
   whether another user has it open and locked.
7. Restart the user's device and try again, in case of a stale
   authentication token.
8. Confirm the file server or share itself is online and reachable.
9. Confirm the user can now access the share and the specific file
   before closing the ticket.

## When to Escalate

- The user needs a permission or group membership change you don't have
  rights to make.
- The share or file server appears to be down for multiple users.
- The request involves granting access to sensitive or restricted data
  requiring manager or owner approval.
- The issue persists after remapping the drive and confirming group
  membership, suggesting a server-side problem.
