---
title: 'Adding New Web Apps'
description: 'Add new web apps to Cleavr.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What is a web app?
In Cleavr, a web app can be a simple static HTML website or a complex, multi-server web application. Much of the web 
app area is centered around building and deploying your web app. 

Web Apps are tied to a site, but are different in that web apps can involve multiple servers. Cleavr makes setting up and
deploying multi-server architecture apps a cinch. 

<base-info>
For WordPress sites, you do not need to set up a web app 
as once you create the WordPress site, you are all ready to go to head over to the URL you set up and manage WordPress via its user interface.
</base-info>

## Adding a new web app
Before you can set up a web app, you must first have your VPS profile, VC profile, server(s), and site all setup and ready to go.

To add a new web app, select **Add App**. Then, enter a **name** to refer to the web app as, select the **vc profile** to use, enter 
the **repository** information, enter the **branch** to deploy, whether or not you want to enable **Push to Deploy** (which means, 
when a commit to the branch is submitted, Cleavr will automatically deploy the new commit), select the **server(s)** for you app 
(at minimum, it’s the server that you setup the site you are creating a web app for), and then select the **site** for your web app 
and select **Add** to create the new web app.

<base-alert>
If you update the repository name in your VC provider, please remember to also update the repository in the web app's settings.
</base-alert>

<base-alert>
To enable push to deploy, you must be an admin on the repository. Per Github: Only members with owner privileges for an organization or admin privileges for a repository can manage webhooks for an organization.
</base-alert>
