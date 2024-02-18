---
title: "DNS Profiles"
description: "Add DNS profiles to connect notification DNS management accounts."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video:
---

We try to keep everything a click away in Cleavr. This includes bringing in DNS record management. This makes setting up
domains for your sites zoom! 🏎

## DNS Providers

### [Cloudflare](https://www.cloudflare.com/)

Cloudflare is a web infrastructure and security tool that assists with many valuable services such as DNS record management,
DDoS mitigation, SSL certificate creation and management, and much more. Cloudflare is a great service to use in conjunction
with Cleavr if you are looking for even more layers of protection.

In your Cloudflare account, grab your API Key from your **Profile > API Tokens > View Global API Key**

### [AWS Route 53](https://aws.amazon.com/route53/)

The Route 53 DNS profile requires an AWS API key that has privileges for Route 53.

### [DigitalOcean](https://www.digitalocean.com/)

DigitalOcean also provides some DNS record management functions. If you already have DO setup as a VPS provider, you can
use the same **Personal Access Token** to setup the DNS records connection.

You will need to ensure that your [domain points to DigitalOcean's nameservers](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars).

### [Porkbun](https://porkbun.com/)

Porkbun makes it easy to purchase domains. It's also equally as easy to connect to your Porkbun account thru Cleavr to manage DNS records.

For creating a new DNS profile for Porkbun, you'll need the email associated with your Porkbun account and an API key which you can create from the Account section.
