---
title: "Deploy a Laravel app"
description: "How to deploy a Laravel app with Cleavr."
image: "https://docs.cleavr.io/images/laravel.png"
video: ""
---

<you-tube video="hZUbL3P-z40"></you-tube>

[Laravel](https://laravel.com/) is a popular PHP-based MVC web framework.

We love Laravel at [Cleavr](https://cleavr.io) and provide a first-class experience for managing Laravel apps on your
production environment.

This guide may be minimal as Cleavr makes provisioning servers and deployments for your Laravel apps painless, but we'll point
out some features that we've built specifically for Laravel.

However, these instructions will go through the more scenic route.

## Step 1: Provision A New Server

Provision a new server in your Cleavr account with your favorite VPS provider.

When navigating through the new server setup, you can choose to add a version of PHP, Node, and a database. However,
this isn't necessary and Cleavr will automatically add these dependencies for you when you add the new site.

## Step 2: Add A New Site

Once the server has completed provisioning, click into the server and add a new site.

Select **Laravel** as the web app type. You can also choose to include a database.

Once everything is set how you want it for your new site, click **Add**.

<base-point>
Cleavr will automatically install PHP, NodeJS, and a database server if one has not already been installed on the server. Also, 
Cleavr will automatically configure a base .env file for your application and fill in the database connection information. 
</base-point>

## Step 3: Configure Deployment Workflow

In the deployment workflow section, click **Complete Setup** for the deployment workflow that was automatically added after your site is successfully created.

### Configure code repository

The first step is to tie the app to the Git repo that the code is stored on.

Once configured, click **Update**.

Updating will then unlock additional areas for your deployment workflow.

### Configure environment variables

Select the **Environment** tab. This will pull in the starter .env file that Cleavr automatically generated on site creation.

You'll notice Cleavr already filled in some required variables; including the database connection variables.

Edit the .env file with any additional required variables for your app and then click **Sync** to update.

<base-info>
The Environments page also has options to 'Clear and Build Config Cache', 'Reload php-fpm', and 'Restart queue' that
are specific to Laravel actions. You can enable these options when syncing the .env file if desired.
</base-info>

### Configure deployment hooks

Click on the **Deployment Hooks** section and review the pre-populated hooks. The pre-populated hooks are typically enough
to deploy the standard Laravel application. However, you'll want to add additional hooks that are required to deploy your app.

After your first deployment, you'll want to review the deployment hooks again to see if they are necessary for following deployments. For example,
you likely will want to disable the 'Migrate Database' hook after the first run.

## Step 4: Deploy

Once you have your deployment workflow configured how you need it, deploy! 🚀

## Additional Laravel info

### Deployment Troubleshooting

[Laravel Deployments Troubleshooting](https://docs.cleavr.io/laravel-deployments)
