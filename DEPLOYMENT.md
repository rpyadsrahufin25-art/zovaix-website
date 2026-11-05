# Vercel deployment checklist

1. Create a new Vercel project and import this folder or upload its ZIP archive.
2. Leave the framework preset as **Other**. No build command or output directory is needed.
3. Deploy, then connect `zovaix.com` and configure its DNS in Vercel.
4. Confirm HTTPS is active before sharing the live URL.
5. Test these paths after deployment:
   - `/`
   - `/mobile/`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/.well-known/security.txt`
   - `/does-not-exist` (branded 404)
6. In Google Search Console, add `https://zovaix.com/` and submit `https://zovaix.com/sitemap.xml`.

## Security maintenance

- `vercel.json` sets CSP, clickjacking protection, MIME sniffing protection, HTTPS transport protection, a restrictive permissions policy, and cache headers.
- The website contains no secret values. Never add API keys, Vercel tokens, or private credentials to HTML, JavaScript, or this repository.
- Renew the `Expires` date in `.well-known/security.txt` before it expires (currently 5 November 2027).
- If external analytics, embeds, fonts, or a form provider are added later, update the Content Security Policy deliberately before deploying.
