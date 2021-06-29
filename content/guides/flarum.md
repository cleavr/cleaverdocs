---
title: 'Deploy Flarum Discussion Platform'
description: 'How to deploy Flarum Discussion Platform with Cleavr.'
image: 'https://docs.cleavr.io/images/flarum.png'
video: ''
---

[Flarum](https://flarum.org/) is a modern, open-source discussion platform. 

[Cleavr.io](https://cleavr.io) deploys Flarum onto one of your cloud servers in just a couple of steps. 

In this guide, we'll deploy Flarum directly from their official GitHub repository to a Cleavr provisioned server. However, you may wish to fork the project 
and then deploy from your forked project. 

## Step 1: Provision new server

Provision a new server with Cleavr. 

## Step 2: Add new site

Once your server has finished provisioning, add a new site. 

Select **PHP** as the site's web app type. 

For **Web Directory**, add `public`.

For **PHP Version**, select a PHP version, 7.3 or newer. 

Select option to **Setup Database**, select MySql 5.7 or 8.0. Keep note of the database info as you'll need them later.

Click **Add** to add the new site. Cleavr will install any missing environment dependencies as well as add the database.


## Step 3: Configure the web app

Click on the web app section, and then click the web app that was added after adding the new site. 

### Configure code repository

In the setup, you'll need to have a GitHub VC profile created in Cleavr. 

Select the GitHub profile. 

For the repository, enter **flarum/flarum**. 

For the branch to deploy, enter **master**. 

Click **Update**. 

### Configure deployment hooks

Click on the deployment hooks tabs. 

Enable the **Install Composer Dependencies** hook and ensure **Install NPM Packages** is disabled. 

## Step 4: Deploy! 

If everything looks to be configured correctly, deploy! 🚀

## Step 5: Configure database

Once deployed, visit the domain assigned to your site and then fill out the setup form. You'll need your db connection info from earlier. 

Enjoy! 🎉

