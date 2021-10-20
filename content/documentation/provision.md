---
title: 'Provision Servers'
description: 'Take the hassle out of provisioning and configuring servers yourself. Cleavr makes it a breeze.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

Cleavr hooks up to several VPS providers to help you provision servers and do initial setup. 

## What is a VPS?
A VPS, or Virtual Private Server, is essentially your slice of the cloud. Cleavr supports multiple cloud providers for 
you to provision your VPS with. 

Cleavr currently integrates with the following hosting providers - 

- [Vultr](https://vultr.grsm.io/cleavr)
- [Linode](https://linode.gvw92c.net/7mOMer)
- [DigitalOcean](https://m.do.co/c/d32ff825abb2)
- [AWS EC2](https://aws.amazon.com/)
- [Hetzner](https://hetzner.cloud/?ref=6UbiqpRc9BFG)
- [UpCloud](https://upcloud.com/signup/?promo=38D8TP)


You may also hook up to a <nuxt-link to="/custom-servers">custom provider</nuxt-link>. 

<base-info>
Before Cleavr can provision a server, you must have an account created with your VPS provider of choice. You can then create a VPS profile
in the Connections section.  
</base-info>

## Why use Cleavr to provision servers? 

<base-point>
<b>TL;DR</b> - to save time and frustration caused when manually setting up and configuring a new server yourself. 
</base-point>

When you provision a server directly with your provider, they typically provide a shell with some default configurations set and offer
some 1-click-installs to get you going. That's typically not enough to run your app and to make sure everything is secured. 

**When Cleavr provisions a new server, it installs and configures additional services and settings to make your server fast and secure.**

## How to Provision

1. From the **Dashboard** or **Servers** pages, click **Create Server** or **Provision New Server**. 
1. Select a **VPS Profile**
1. Select a **Server Region**
1. Select a **Server Plan**
1. Select a **Server Type** - Cleavr will optimize the server based on the selected type
1. Add a **Server Name** - a default server name is pre-populated
1. Select **Start Provisioning** to start provisioning your new server

Feel free to navigate away from the page while it's provisioning. You will receive an email once the provisioning is complete. 

<base-alert>
Make sure you look for and store the contents of the email in a safe place! It contains information that is not stored in Cleavr and is 
only available in the email. 
</base-alert>
