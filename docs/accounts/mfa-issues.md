# Multi-Factor Authentication (MFA) Issues

## Symptom

The user cannot finish logging in because their multi-factor authentication
(MFA) prompt (an app notification, a code, or a phone call) isn't working.

## Possible Causes

- The user lost or replaced their phone and no longer has the authenticator
  app installed.
- The authenticator app is outdated or not receiving push notifications.
- The phone has no internet or mobile data connection.
- The user is entering a one-time code too slowly and it expires.
- The MFA method was not registered correctly in the first place.

## Step-by-step Resolution

1. Confirm which MFA method the user is trying to use: app notification,
   SMS code, or phone call.
2. Ask the user to check that their phone has an internet or mobile data
   connection.
3. Have the user open the authenticator app directly instead of waiting for
   a push notification, in case notifications are delayed.
4. If using a one-time code, confirm the user is entering it before it
   expires, and that the phone and computer clocks are both correct.
5. Try an alternate registered MFA method if the account has one, such as a
   backup phone number.
6. If the user has a new phone and lost access to the authenticator app,
   verify their identity through your organization's standard verification
   process before making any changes.
7. Once identity is confirmed, reset or re-register the MFA method for the
   user.
8. Have the user complete a full login test with the new MFA method before
   ending the session.

## When to Escalate

- You cannot verify the user's identity through standard checks (for
  example, a new employee with no manager available to confirm).
- The user has no working MFA method at all and needs an administrator
  override.
- A conditional access or security policy is blocking sign-in even after
  MFA succeeds.
- The user reports MFA prompts they did not trigger, which may indicate a
  compromised account.
