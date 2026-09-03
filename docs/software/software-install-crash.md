# Software Won't Install or Crashes on Launch

## Symptom

An application fails to install, or installs but crashes immediately when
opened.

## Possible Causes

- Insufficient disk space for the installation.
- Missing or outdated prerequisite software (for example, .NET Framework
  or a Visual C++ Redistributable).
- The installer or application files are corrupted.
- Insufficient user permissions to install or write to protected folders.
- A conflicting older version of the same software is still installed.
- Antivirus or endpoint protection blocking the installer or the app's
  processes.
- The application is incompatible with the current OS version.

## Step-by-step Resolution

1. Confirm there's enough free disk space for the install.
2. Re-download the installer from the official source in case the
   original file is corrupted, and check the file size if one is listed.
3. Run the installer as an administrator.
4. Check Event Viewer (Windows Logs > Application) for an error matching
   the crash, for a clue about a missing dependency.
5. Install or repair common prerequisites (.NET Framework, Visual C++
   Redistributables) if the app depends on them.
6. Uninstall any existing or older version of the software completely
   before reinstalling.
7. Temporarily disable antivirus or endpoint protection to rule out
   blocking, then reinstall and re-enable protection afterward.
8. Confirm the application is supported on the current OS version.
9. Launch the application and confirm it opens and functions correctly
   before closing the ticket.

## When to Escalate

- The application requires a license or deployment through a software
  management tool you don't have access to.
- The crash points to a deeper OS-level issue, such as repeated failures
  across multiple unrelated applications.
- The issue affects many users at once, suggesting a broken deployment
  package or update.
- Resolving it requires the software vendor's own support process for a
  known bug.
