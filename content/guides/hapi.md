---
title: "Deploy a Hapi JS app"
description: 'Deploy a Hapi RESTapi application.'
image: 'https://docs.cleavr.io/images/hapi.png'
video: ''
---

[Hapi](https://hapi.dev/) is a popular Node framework that gets you quickly started making robust, powerful REST APIs. Hapi is intuitive, scalable, and maintainable and is a more
opinionated offshoot of the Express framework.  

## Prerequisite - ensure Port is not hardcoded

If you are following one of the Hapi tutorials, they typically have your hard code the port number. Make sure to update your code to check `process.env.PORT` 
for the port number as Cleavr will randomly assign a port number during site creation. 

In your Hapi JS project, open the `index.js` file and update as follows: 

```javascript
const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost'
    });
```

## Step 1: Add A NodeJS SSR Site

On an existing server, click **Add Site** to add a new site to your server. 

Select the **NodeJS SSR** option and enter the remainder site details and click **Add** to create the new site on your server. 

Cleavr will automatically install NodeJS on your server if NodeJS has not already been installed.  



## Step 2: Add A Web App

After the site has successfully installed, you'll now need to create a web app and deploy out your application. 

In the web app section, you'll notice that a new web app was automatically created after the NodeJS site was added. This is a basic web app shell
that you can use to complete the setup of your web app. Click on **Complete Setup** on the web app. 

Configure the **VC Provider**, **Repository**, and **Branch To Deploy** fields on the Settings > Code Repository tab and then click **Update**.

Next, on the **NPM Build** tab, add the following: 
- **Entry Point:** index.js
- **Build Command:** npm run build --production
Click **Update**. 

<base-info>
You may need to update the entry point, arguments, build command, and/or cwd path fields based on your package.json file settings. 
The above works for the standard defaults.
</base-info>

In the Deployment Hooks section, you may need to disable the **build** hook if you do not have anything to build for production. 

## Step 3: Deploy! 
If everything looks good, go to the deployments section and deploy! 🚀
