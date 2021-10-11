---
title: "Deploy a Sails JS app"
description: 'Deploy a Sails application.'
image: 'https://docs.cleavr.io/images/sails.png'
video: ''
---

[Sails](https://sailsjs.com/) is an opinionated MVC framework that helps you quickly get started with creating web applications.

## Prerequisite - ensure Port is not hardcoded

Make sure to update your code to check `process.env.PORT` for the port number as Cleavr will randomly assign a port number during site creation. 

```javascript
app.listen(process.env.PORT || 3000)
```

## Step 1: Add A NodeJS SSR Site

On an existing server, click **Add Site** to add a new site to your server. 

Select the **NodeJS SSR** option and enter the remainder site details and click **Add** to create the new site on your server. 

Cleavr will automatically install NodeJS on your server if NodeJS has not already been installed.  



## Step 2: Configure Web App

After the site has successfully installed, you'll now need to create a web app and deploy out your application. 

In the web app section, you'll notice that a new web app was automatically created after the NodeJS site was added. This is a basic web app shell
that you can use to complete the setup of your web app. Click on **Complete Setup** on the web app. 

Configure the **VC Provider**, **Repository**, and **Branch To Deploy** fields on the Settings > Code Repository tab and then click **Update**.

Next, on the **NPM Build** tab, add the following: 
- **Entry Point:** app.js
- **Build Command:** npm run build --production
Click **Update**. 

<base-info>
You may need to update the entry point, arguments, build command, and/or artifact path fields based on your package.json file settings. 
The above works for the standard defaults.
</base-info>

In the Deployment Hooks section, you may need to disable the **build** hook if you do not have anything to build for production. 

## Step 3: Deploy! 
If everything looks good, go to the deployments section and deploy! 🚀
