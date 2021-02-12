---
title: 'Set up a Mongo DB'
description: 'Setting up a Mongo DB.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

Cleavr does not directly support installing and configuring a MongoDB. Currently, Cleavr assists with MySQL, MariaDB, and PostgreSQL. 

But, don't let that stop you from using Mongo!

You have a couple different options to set up Mongo on your server

1. SSH into your server and manually install, configure, and run Mongo
2. Set up and use Mongo with a Docker Container

In this guide, we'll use Mongo in a Docker Container and create a sample app for an example. 

<base-point>
Cleavr supports installing and managing Docker! In the server > services section, you can install Docker onto your server.
</base-point>

To get started with the example, first, provision a server and have it ready. 

## Add Docker Service

In the server > services section, select **Install** for the Docker service. This will install Docker onto your server. 

## Add a new site

For our example, we'll use a Nest JS sample project. 

First, we'll need to add a new **NodeJS SSR** site to the server. 

## Add and configure web app

Once the site has been added to the server, in the Web App section, select **Complete Setup** for the web app that was created after the new
NodeJS SSR site was added to the server. 

In the settings > Code Repository tab, you'll connect to our sample project. You'll need to have a GitHub account and VC profile created in Cleavr for this step. 

- **Version Control Provider:** GitHub
- **Repository:** armgitaar/next-mongo
- **Branch to Deploy:** master

Click **Update**

Click on the **NPM Build** tab and fill in the following:

- **Entry Point:** main.js
- **Build Command:** npm run build --production
- **Artifact Path:** dist

Click **Update**. 

Click on the **Deployment Hooks** section and add the following deployment hook: 

**Docker compose up**
```bashscript
cd {{ releasePath }}
docker-compose up -d
```

Place this deployment hook directly after Build Assets. 

In this example, we are using a [docker-compose.yml](https://github.com/armgitaar/next-mongo/blob/master/docker-compose.yml) file to configure the Mongo database. 

Another option is to setup and run the Mongo Database in a container via the command line when SSH'ing into the server. 

<base-info>
The Docker Compose Up deployment hook only needs to be enabled on the initial run. As long as the container is running, we don't need to run this hook.
</base-info>

## Deploy! 
If everything looks good, go to the deployments section and deploy! 🚀

You can now interact with the cat API using `https://example.com/cats`. 
