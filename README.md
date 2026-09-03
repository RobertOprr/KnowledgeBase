# Knowledge Base

A static IT troubleshooting knowledge base for L1 Help Desk support, built
with [MkDocs](https://www.mkdocs.org/) and the
[Material](https://squidfunk.github.io/mkdocs-material/) theme.

This is a documentation portfolio project. It focuses on clear, structured
technical writing for common L1 support scenarios: password resets,
network issues, printer problems, hardware triage, and more, plus a guide
on when and how to escalate a ticket to L2. It's meant to sit alongside two
related projects: a [Django/React help desk ticketing
system](https://github.com/RobertOprr/ticketing) and a [Python CLI for IT
diagnostics](https://github.com/RobertOprr/sysdiag).

**Live site:** https://robertoprr.github.io/KnowledgeBase/

Available in English and Romanian (language switcher in the header).

## Articles

Every article follows the same structure: Symptom, Possible Causes,
Step-by-step Resolution, and When to Escalate.

- **Accounts**: Password Reset & Account Lockout, MFA Issues
- **Network**: Wi-Fi & Network Connectivity, VPN Connection Issues
- **Hardware**: Computer Won't Boot, Slow Computer Performance,
  Peripheral Not Detected
- **Printers**: Printer Not Printing
- **Email**: Outlook Sync Problems
- **Process**: Escalation Criteria (L1 to L2)

## Running locally

```bash
pip install mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-static-i18n
mkdocs serve
```

Then open http://127.0.0.1:8000 in your browser. Edits to any file in
`docs/` reload automatically.

## Deployment

`.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages
automatically on every push to `main`. To enable it:

1. Push this repository to GitHub.
2. Let the workflow run once. It creates a `gh-pages` branch.
3. In the repo's **Settings → Pages**, set the source to the `gh-pages`
   branch.
