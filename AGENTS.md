# Accounting template

This repository is a visual starter, not a ledger. Preserve the clear Merit-inspired navigation and original Nexa identity.

- Start with README.md. Customize index.html, styles.css, and app.js; Wrangler is a development dependency and there is no application backend yet. Publish the public preview to the Nexa Templates Worker, with the Preview label visible on mobile too; do not enable GitHub Pages.
- Keep sample figures and dates clearly identified. Do not claim tax compliance, reconciled balances, or successful bank synchronization from this preview.
- Work with the customer's accountant to define ledger entries, accounting periods, invoices, tax rules, and audit history. Use isolated data for migrations and calculation tests.
- Imported projects should use their own Cloudflare account, Worker name, resources, and secrets. Never commit financial records or credentials to this public upstream; retain Git history for future template merges.
- Run npm run build, check JavaScript syntax, and inspect desktop/mobile layouts and invoice filtering. Add meaningful accounting and authorization tests when real functionality is implemented.
