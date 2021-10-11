---
title: "Deploy a Foal TS app"
description: 'Deploy a Foal TS web application.'
image: 'https://docs.cleavr.io/images/foal.png'
video: ''
---

[Foal TS](https://foalts.org) is a Node framework written in TypeScript that keeps their framework simple, intuitive, and easy to get started with. 

## Prerequisite

### Install Foal on server
When building your app in production, depending on how you have your build script setup in `package.json`, you may need to install Foal's CLI on your 
server. If so, SSH into your server and run the following: 

```bashscript
npm install -g @foal/cli
```

### Ensure port is being read from server environment

Make sure to update your code to check `process.env.PORT` for the port number as Cleavr will randomly assign a port number during site creation. 

In your Foal TS project, open the `index.ts` file and update as follows: 

```typescript
const port = Config.get('port', 'number', 3001);
  httpServer.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}...`);
  });
```

## Step 1: Add A NodeJS SSR Site

On an existing server, click **Add Site** to add a new site to your server. 

Select the **NodeJS SSR** option and enter the remainder site details and click **Add** to create the new site on your server. 

Cleavr will automatically install NodeJS on your server if NodeJS has not already been installed.  

## Step 2: Add A Database

You'll likely need a MySQL 5.7 or PostgreSQL database for your app. On your server, install your preferred database type and add a 
database and database user. You can add the configurations for your database in a myriad of ways; Foal will look for .env files for 
the database config settings. If this is how you are adding your database connections configs, be sure to also add them in the Web App 
Environment section when you configure your web app. 

## Step 3: Add A Web App

After the site has successfully installed, you'll now need to create a web app and deploy out your application. 

In the web app section, you'll notice that a new web app was automatically created after the NodeJS site was added. This is a basic web app shell
that you can use to complete the setup of your web app. Click on **Complete Setup** on the web app. 

Configure the **VC Provider**, **Repository**, and **Branch To Deploy** fields on the Settings > Code Repository tab and then click **Update**.

Next, on the **NPM Build** tab, add the following: 
- **Entry Point:** build/index.js
- **Build Command:** npm run build --production
Click **Update**. 

<base-info>
You may need to update the entry point, arguments, build command, and/or artifact path fields based on your package.json file settings. 
The above works for the standard defaults.
</base-info>

If using .env to provide database connection variables, add them to the Environment section. 

In **Deployment Hooks**, create a new deployment hook: 

#### Run Migration
```bashscript
cd {{ releasePath }}
npm run migrations
```
Place the run migration deployment hook after the build hook. 


## Step 4: Deploy! 
If everything looks good, go to the deployments section and deploy! 🚀
