---
title: 'Expose Local Sites'
description: 'How to expose local sites on your server.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

There are several use cases where you might have an internal process, app, or service running on one of your server's local ports. 

Often, these internal services have a UI that is available. Such as, the Bull Board UI, [Supervisor](/guides/expose-supervisor), Laravel Horizon for queue management, Strapi's admin 
portal, usage analytics, server monitoring apps, and so on. 

You may programmatically create and expose a view for these use cases or even open the port and access via `<IP Address>:<Port Number>`. 

However, Cleavr makes it a cinch with the **Generic Port App** site type. 


## Step 1: Add Generic Port App

Add a new site and select the **Generic Port App** app type. 

Fill in the **Port Number** with the port number that the internal app is set to run on. 

Click **Add** to add the new site. 

You may now access the generic port app using the domain you setup the site with. 

<base-info>
There may be the prerequisite that you need to first deploy an app where part of the project is to run an internal app that runs on a separate port number, such as
a queue processor. 
</base-info>

## Step 2: Enable Authentication For The Site (optional - but encouraged)
If the app doesn't already have an authentication method, then we encourage you to add one. The quickest way would be to 
utilize Cleavr's site authentication feature. 

Navigate to the site section and go to **Authentication**. 

Click on **Lock** to add authentication to the site and add user credentials to grant access to the site. 
