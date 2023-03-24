---
title: "Let's Encrypt Errors"
description: "Cleavr uses Gravatar for avatars."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

## 😎 Check your DNS status

Use [Doneo.io](https://doneo.io/) to verify that your domain has successfully propagated before adding a site with SSL.
This is the cause for most site creation failures as the DNS needs to be propagated to successfully verify the domain points
to the correct server during the SSL creation process.

Cleavr will perform a check before you attempt to add SSL certs to a domain. However, the actual verification is done by
Let's Encrypt and their servers will check to make sure the IP applying for SSL cert is the same that their servers identify during their
verification process.

## What went wrong?

This error occurs when the Let's Encrypt services is attempting to verify that the domain is pointing to the correct IP
and is receiving an invalid response. In other words, it is most likely that the domain is not correctly directing traffic
to the server's public IP or that the record has not yet propagated to the verification service that is performing the verification check.

To resolve, verify the 'a' record points to the correct server public IP using DNS Checker and then attempt to re-create the site.

<base-alert>
Using Cloudflare or a proxy server? If you are using Cloudflare, check the DNS record and make sure that the 'proxied' setting is turned off. If the IP is being proxied, then this can fail
the domain verification and will then fail applying LetsEncrypt SSL certification. You can re-enable the proxy setting after LetsEncrypt SSL certificate has successfully been applied. 
</base-alert>

## Check that port 80 and 443 are open

Use [Doneo.io](https://doneo.io/) to check the server ports 80 and 443. Both of these ports should be opened in order to initially install SSL as well as for renewing SSL.

If one of the ports is closed, check the Services section in Cleavr and verify that there are no rules blocking ports 80 or 443.

If there are no rules in Cleavr and you are using a Custom Server setup, then it is most likely that your hosting provider blocks one or both ports by defaults. Check your hosting provider's admin portal and check that port 80 and 443 are opened. They may also present this as enabling "http" and/or "https" access.
