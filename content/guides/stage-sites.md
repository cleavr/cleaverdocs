---
title: 'Stage a new site'
description: 'How to stage a new Site with Cleavr.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

If you build sites for clients, you'll often want to have a staging ground to work on the site, provide access to the client
to view progress, and keep the site hidden from everyone else until it's ready to go live. 

There are multiple options to use Cleavr to stage your in-progress sites. 

## Option 1: Enable site authentication

The most straightforward method is to lock the site from being viewed by utilizing the **Authentication** feature. 

Navigate to your site, click on **Authentication**, and then click on **Lock**. This will lock the site so visitors will
be required to provide credentials in order to view the site. 

Then, add some user credentials to provide to users who can access the site. 

## Option 2: Use a test domain

When you add a new site, you have the option to use a free Cleavr domain. You can stage the site on this domain and then
change the domain to the official one when you are ready. 

To switch the domain, go to the site settings and click the **Rename Domain** tab. Enter the new domain and click **Rename**. 

<base-info>
This is a useful method; however, you may consider whether or not you want to provide your client with a randomized domain. 
</base-info>

## Option 3: Use an Alias

With this option, you can hide the main official domain and use an alias domain as the preview site. 

Here is an example of how this can be set up: 

1. Create a new site and use the official domain that you'll use for the site
1. In Site Settings > Domain Aliases, add a domain alias to use for the site (note - you do need to own the domain you are using as an alias); such as: newsite.preview.com
1. Update the DNS A record for the preview site and point it to your server's IP - this will route visitors to see the preview site
1. For the official site, you can choose to not handle the DNS record, which will then show as an unreachable site for the visitor, or you can configure it to point to a splash page
1. To configure to point to a splash page, add a CNAME record for the domain that points to a splash page domain that can also be hosted on Cleavr - this is a common approach for in progress sites

When you are ready to launch the site, point the official domain's DNS Record to the server's public IP and optionally remove the alias. 
