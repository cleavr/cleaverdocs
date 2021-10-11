---
title: 'Deploy October CMS'
description: 'How to deploy October CMS with Cleavr.'
image: 'https://docs.cleavr.io/images/october.png'
video: ''
---

[October CMS](https://octobercms.com/) is a Laravel-based content management system (CMS). 

[Cleavr.io](https://cleavr.io) deploys your October CMS app with ease. 

In this guide, we'll deploy October CMS directly from their official GitHub repository to a Cleavr provisioned server. 

<base-info>
Even though October CMS is built using Laravel, they formatted the package to work with more standard PHP environment settings. Because of this, we
don't need to have Node installed on our server. 
</base-info>

## Step 1: Provision New Server

Provision a new server with Cleavr. 

You may optionally install a version of PHP during provisioning. 

## Step 2: Add New Site

Once your server has finished provisioning, add a new site. 

Select **PHP** as the site's web app type. 

## Step 3: Configure The Web App

Click on the web app section, and the click **Complete Setup** for the web app that was added after adding the new site. 

### Configure code repository

In the setup, you'll need to have a GitHub VC profile created in Cleavr. 

Select the GitHub profile. 

For the repository, enter **octobercms/october**. 

For the branch to deploy, enter **1.1**. 

Click **Update**. 

This will then open up additional tabs in the web app. 

### Configure deployment hooks

Click on the deployment hooks tabs. 

Enable the **Install Composer Dependencies** hook. 

Add a new hook, October Install, with the following script: 

```
cd {{ releasePath }}
php artisan october:install
```

Add the new hook directly below the 'Install Composer Dependencies' hook. 

This new hook will setup the database. 

## Step 4: Deploy! 

If everything looks to be configured correctly, deploy! 🚀

## Step 5: Grab The Admin Password

After the app deploys, you'll want to grab the admin password that was generated during the October Install deployment step. Click
into the deployment details, then click on the October Install step. This will bring up the deployment log for this step. Scroll down and
take note of the generated admin password. On the URL for your October CMS, you will use this password with along with the 'admin' username
to log into the backend portion of the October CMS application. 

![October backend password](/images/october/october-pw.png)

<base-info>
You can of course clone the October CMS repository and do local development on your computer and then deploy your code in a similar manner. 
</base-info>
