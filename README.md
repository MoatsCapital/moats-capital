# Moats Capital website

A responsive, self-contained Home, About, and Contact website. No build step, subscriptions, fonts to download, or framework dependencies.

## Preview

Unzip the package, then double-click `index.html`. Use the Home, About, and Contact links to browse. All styling and images work offline. The contact form opens your installed email app with a draft addressed to **info@moats.llc**; you must send the draft yourself. The website does not send or store messages. This requires a configured email app and an active recipient mailbox.

## Publish on GitHub Pages

1. Create a public GitHub repository, for example `moats-capital`.
2. Upload the **contents** of this folder, including `assets`. Make sure `index.html` is directly at the repository root, not inside another `moats-capital` folder. Commit the files to `main`.
3. In **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/(root)**. Save.
4. Wait for deployment, then open the website URL shown there. Navigation also works when the site lives under a repository path.

[GitHub publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Connect moats.llc through GoDaddy

After you approve the site and the GitHub preview works:

1. In GitHub **Settings → Pages → Custom domain**, enter `www.moats.llc` and save. GitHub will create the `CNAME` file. It is deliberately not included in this package so your first preview uses the GitHub URL.
2. In GoDaddy's DNS records for `moats.llc`, set these website records:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Use your actual GitHub username; do not include `https://` or the repository name. Replace conflicting website records at `@` and `www`; preserve your email records (MX and email-related TXT records).

3. Allow DNS to update, then enable **Enforce HTTPS** in GitHub Pages when available. DNS and certificate availability may take up to 24 hours. With both domains configured, `moats.llc` redirects to `www.moats.llc`.

[GitHub custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Editing

- `index.html`: home page and short About section.
- `about.html`: family description.
- `contact.html`: contact form.
- `assets/style.css`: colors, typography, spacing, and responsive layouts.
- `assets/config.js`: recipient email address.
- `assets/site.js`: email-draft behavior.

## Assets and reference fidelity

The layout follows the four supplied screenshots. The mountain photograph is an AI-assisted reconstruction of the screenshot, not the original source photograph. The hero uses your supplied transparent white/saddle logo unchanged, with no color filters. The saddle accent (#C27D38) is sampled from its mountain symbol; darker brown is used for readable text and focus states. `assets/moats-capital-original.png` preserves the original logo unchanged.

Wording has been lightly cleaned up and reflects your clarification that this is a family portfolio, not a public investment business. Navigation includes only the requested three pages; the screenshot's extra Portfolio footer link is omitted. Local system serif/sans-serif fonts keep the site self-contained, so typography may differ slightly by device.

This package has not been published and no domain settings have been changed.

## Verification

Local asset and navigation references and JavaScript syntax were checked. Automated browser rendering was unavailable in the build environment; please review the appearance on desktop and phone before publishing.
