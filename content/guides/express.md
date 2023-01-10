---
title: "Deploy an Express JS app"
description: "Deploy an Express application."
video: ""
---

[Express JS](http://expressjs.com/) doesn't need much of an introduction. It is one of the first and most well known frameworks that begets many other Node JS
frameworks.

## Prerequisite - Ensure Port Is Not Hardcoded

Make sure to update your code to check `process.env.PORT` for the port number as Cleavr will randomly assign a port number during site creation.

In the `app.js` file, update the following:

```javascript
var server = app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + server.address().port);
});
```

## Step 1: Add A NodeJS SSR Site

On an existing server, click **Add Site** to add a new site to your server.

Select the **NodeJS SSR** option and enter the remainder site details and click **Add** to create the new site on your server.

Cleavr will automatically install NodeJS on your server if NodeJS has not already been installed.

## Step 2: Add A Web Site

After the site has successfully installed, you'll now need to create a deployment workflow and deploy out your application.

In the deployment workflow section, you'll notice that a new deployment workflow was automatically created after the NodeJS site was added. This is a basic deployment workflow shell
that you can use to complete the setup of your deployment workflow. Click on **Complete Setup** on the deployment workflow.

Configure the **VC Provider**, **Repository**, and **Branch To Deploy** fields on the Settings > Code Repository tab and then click **Update**.

Next, on the **NPM Build** tab, add the following:

- **Entry Point:** app.js
- **Build Command:** npm run build --production
  Click **Update**.

<base-info>
You may need to update the entry point, arguments, build command, and/or cwd path fields based on your package.json file settings. 
The above works for the standard defaults.
</base-info>

In the Deployment Hooks section, you may need to disable the **build** hook if you do not have anything to build for production.

## Step 3: Deploy!

If everything looks good, go to the deployments section and deploy! 🚀
