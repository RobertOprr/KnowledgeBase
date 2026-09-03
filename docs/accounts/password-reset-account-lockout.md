# Password Reset and Account Lockout

## Symptom

The user cannot log in to their computer or company account. They see an
"incorrect password" or "account is locked" message, even when they believe
they are entering the correct password.

## Possible Causes

- The user has forgotten their password.
- The password was recently changed, and an old password is still cached in
  a browser, email client, or mapped network drive.
- Repeated failed login attempts triggered an automatic lockout policy.
- Caps Lock or Num Lock is on, causing repeated incorrect entries.
- The account was disabled by an administrator (different from a lockout).
- The password has expired under a rotation policy.

## Step-by-step Resolution

1. Confirm the exact error message with the user (for example, "incorrect
   password" versus "account locked").
2. Ask the user to check that Caps Lock and Num Lock are off, then retry.
3. Verify the account is locked, not disabled — the two require different
   fixes.
4. Unlock the account using the account management console, or direct the
   user to the self-service unlock portal if one is available.
5. Reset the password to a temporary one and require a change at next login.
6. Have the user log in with the temporary password while you're still on
   the call or chat.
7. If the user has the same account saved elsewhere (email client, VPN
   client, mapped drives), remind them to update the saved credentials there
   too, or they will trigger another lockout.
8. Confirm the user can log in and reach their usual applications before
   closing the ticket.

## When to Escalate

- The account is disabled rather than locked, and you don't have permission
  to re-enable it.
- The lockout recurs within minutes of being cleared, which can indicate a
  device using outdated cached credentials or a compromised account.
- Sign-in logs show attempts from an unfamiliar location or an unusual
  pattern.
- The user says they did not attempt to log in when the lockout occurred.
