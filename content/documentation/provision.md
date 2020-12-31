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
- DigitalOcean
- AWS EC2
- Hetzner
- Vultr
- Linode

You may also hook up to a <nuxt-link to="/custom-servers">custom provider</nuxt-link>. 

<base-info>
Before Cleavr can provision a server, you must have an account created with your VPS provider of choice. You can then create a VPS profile
in the providers section or while going through the provisioning steps.  
</base-info>

## Why use Cleavr to provision servers? 

<base-point>
<b>TL;DR</b> - to save time and frustration caused when manually setting up and configuring a new server yourself. 
</base-point>

When you provision a server directly with your provider, they typically provide a shell with some default configurations set and offer
some 1-click-installs to get you going. That's typically not enough to run your app and to make sure everything is secured. 

**When Cleavr provisions a new server, it installs and configures additional services and settings to make your server fast and secure.**

## How to Provision

If you have an app ready-to-go, then you can use <nuxt-link to="/flash-deployments">Flash Deploy</nuxt-link> to quickly provision a server
and deploy your app. 

1. From the **Servers** page, click **Add Server**. 
2. Select the **cloud provider** to provision a server with
3. Select your desired **VPS profile**
4. Add a server **name** - a default server name is pre-populated
5. Select a server **plan**; to see the server specs, check the show specs box
6. Select a server **region**
7. Optionally, enable **Install Monitoring**
8. Optionally, select a **database**
9. Optionally, select server **environment**
10. Select **Start Provisioning** to start provisioning your new server

<base-info>
If you don't know which database or environments to install, don't worry about it! You can install them later. Better yet, 
Cleavr automatically installs any missing environment dependencies based on app types you add to the server. 
</base-info>

Feel free to navigate away from the page while it's provisioning. You will receive an email once the provisioning is complete. 

<base-alert>
Make sure you look for and store the contents of the email in a safe place! It contains information that is not stored in Cleavr and is 
only available in the email. 
</base-alert>
