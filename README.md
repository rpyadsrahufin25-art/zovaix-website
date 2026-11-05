# ZOVAIX website

Production-ready static website for Vercel.

## Structure

```text
index.html                 Desktop experience and mobile redirect
mobile/index.html          Lightweight mobile experience
assets/                    Images, fonts, and desktop/mobile visual frames
404.html                   Branded not-found page
robots.txt                 Search-crawler rules
sitemap.xml                Canonical public URL
site.webmanifest           Installable-site metadata
.well-known/security.txt   Vulnerability-reporting contact
vercel.json                Vercel routes, cache rules, and security headers
```

## Key production details

- Canonical production domain: `https://zovaix.com/`.
- The mobile route uses a canonical root URL and `noindex` header to avoid duplicate indexing; phone users are redirected to it from the root experience.
- The founder on both experiences is Raushan Pratap Yadav, using `assets/img/founder-raushan.jpg`.
- The project is static: no server runtime, database, API keys, or environment variables are required.

See [DEPLOYMENT.md](DEPLOYMENT.md) for the Vercel launch checklist.
