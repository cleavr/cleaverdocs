---
title: 'Expose Local Sites'
description: 'How to expose local sites on your server.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

There are several use cases where you might have an internal process, app, or service running on one of your server's local ports. 

Often, these internal services have a UI that is available. Such as, the Bull Board UI and Laravel Horizon for queue management, Strapi's admin 
portal, usage analytics, server monitoring apps, and so on. 

You may programmatically create and expose a view for these use cases or even open the port and access via <IP Address>:<Port Number>. 

Another viable option might be to add another site via Cleavr and update the `proxy_pass` setting to expose the site.

An added benefit of this is you can assign a domain to the service and leverage the **Site Lock** feature to add authentication, if 
the service doesn't already utilize one, so that you can manage who has access.

## Example
We'll walk through an example of how to setup an external facing site for an internal app using Bull for Adonis as an example. 

<base-info>
For some of these services, you may deploy them to your server as a standalone app and, in that case, you won't likely need to do 
any additional configuration and are already good to go. These instructions are more geared towards apps and services that are initiated
when the base app is deployed and activated on the server. 
</base-info>

### Step 1: Deploy out your app
With Adonis Bull, the service is configured typically to launch when the base app is started or manually. Either way, it is set to 
run on port 9999. 

Deploy out the base application and verify the auxiliary app is running. 

### Step 2: Add a new site
Now, add a new site and select the NodeJS SSR app type. 

Since Adonis-Bull is a server-side NodeJS application, we'll want to select this option. 

You can assign this site to a sub-domain of your main site. For example, something like `queue.example.com` may be appropriate. 

Click **Add** to add the new site. 

### Step 3: Configure NGINX
After the site is created, in go to site > settings > NGINX Config. This will load the NGINX configuration for the site you've added. 

Within the `location /` block, you'll see a line for `proxy_pass`. Since Adonis Bull is set to run on port `9999`, we'll want to update
the port. 

```
proxy_pass              http://localhost:9999;
```
Make the port change and then click **Update**. 

Now, go to the server > services section and click the button to refresh **NGINX**. 

After you refresh NGINX, also click on the heartbeat icon the make sure that NGINX didn't run across any errors. 

If everything is green, then go to the URL you've assigned to the site and you should be able to see it. 🚀

### Step 4: Enable authentication for the site (optional - but encouraged)
If the app doesn't already have an authentication method, then we encourage you to add one. The quickest way would be to 
utilize Cleavr's site authentication feature. 

Navigate to the site section and go to **Authentication**. 

Click on **Lock** to add authentication to the site and add user credentials to grant access to the site. 
