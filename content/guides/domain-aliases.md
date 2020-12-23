---
title: 'How to add domain aliases'
description: 'How to add domain aliases in Cleavr.'
image: 'https://docs.cleavr.io/images/newsite.png'
video: ''
---

You can set up a site to bind to multiple domains. You may want to do this if, for instance, you have a common parking page that you want to display 
when a user visits a certain domain or sub-domain. Instead of adding a site for each domain, you can bind a site with multiple alias
domains. 

<base-info>
This will mask the domain so that the site visitor will view the alias domain in their web browser.
</base-info>

## Step 1 - Add a new site

In [Cleavr](https://cleavr.io), add a new site to a server. When you add a new site, you will include the main domain that will be used for the site. 

## Step 2 - Add aliases

After the new site is finished installing, click on the **Settings** tab in the site section. 

Now, you can add alias domains to use for the site. You can add whatever domain and sub-domains you'd like - just be sure you have ownership
of the domain and the ability to update the DNS A records for this to work properly. 

![Multiple domain SSL certs](/images/domain-alias.png)

<base-info>
Comma seperate multiple aliases. 
</base-info>

## Step 4 - Point DNS records to the server's public IP

If using Cleavr for DNS record management, go to the DNS Records section and create new or update existing records and point them to the server's public IP that the site
is hosted on. 

You'll want to make sure each alias domain / sub-domain you applied is pointing to the correct server. 

## Step 5 - Update SSL certs

You'll likely want to update the SSL certs for the site so that if a user accesses an alias, that they aren't presented a certificate error warning.

In the `server > site > SSL` section, remove the current SSL cert at the bottom of the page. 

Next, add in all of the domains (the main domain and the alias domains) in the **Domains** text field and then select Activate. 

![Multiple domain SSL certs](/images/domain-ssl.png)

This will apply the new cert so that users don't see SSL warning messages. 

<base-alert>
Be sure to give proper time for the DNS Record updates to propagate. If the correct IP assignments aren't yet visible to Let's Encrypt, then 
SSL will fail and you'll need to try again later.
</base-alert>
