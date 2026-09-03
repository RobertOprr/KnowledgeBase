# Blue Screen of Death (BSOD)

## Symptom

The computer crashes to a blue screen with an error message and restarts
unexpectedly, sometimes repeatedly.

## Possible Causes

- A faulty or incompatible driver, especially after a recent update.
- Failing or incompatible RAM.
- Overheating hardware.
- A corrupted system file or a failed Windows update.
- A failing hard drive or storage device.
- Incompatible or faulty peripheral hardware.

## Step-by-step Resolution

1. Note the exact error code shown on the blue screen (for example,
   "IRQL_NOT_LESS_OR_EQUAL"), or find it later in Reliability History or
   Event Viewer.
2. Check whether the crashes started right after a driver or Windows
   update, and roll it back if so.
3. Disconnect any recently added peripherals or hardware and see if the
   crashes stop.
4. Run Windows Memory Diagnostic to rule out faulty RAM.
5. Check the drive's health status and run a disk check.
6. Update graphics, chipset, and network drivers to the latest stable
   versions.
7. Check for overheating: confirm fans are spinning and vents aren't
   blocked, especially on laptops.
8. Run System File Checker (`sfc /scannow`) to repair corrupted system
   files.
9. Confirm the device runs stable for a period of normal use before
   returning it to the user.

## When to Escalate

- The same error code recurs after driver rollback, memory testing, and a
  disk check.
- Memory Diagnostic or the disk health check reports an actual hardware
  failure.
- The crashes happen so frequently that basic diagnostics can't complete.
- The issue started after a Windows feature update and affects multiple
  devices, suggesting a broader compatibility problem.
