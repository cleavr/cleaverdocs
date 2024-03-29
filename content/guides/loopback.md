---
title: "Deploy a Loopback API"
description: "Deploy a Loopback API or micro service."
image: "https://docs.cleavr.io/images/loopback.png"
video: ""
---

[Loopback](https://loopback.io) is a highly-extensible, open-source Node.js framework that enables you to create dynamic end-to-end REST APIs with little or no coding.

## Prerequisite

### Install Loopback on server

When building your app in production, depending on how you have your build script setup in `package.json`, you may need to install Loopback's CLI on your
server. If so, SSH into your server and run the following:

```bashscript
npm i -g @loopback/cli
```

## Step 1: Add A NodeJS SSR Site

On an existing server, click **Add Site** to add a new site to your server.

Select the **NodeJS SSR** option and enter the remainder site details and click **Add** to create the new site on your server.

Cleavr will automatically install NodeJS on your server if NodeJS has not already been installed.

## Step 2: Configure Deployment Workflow

After the site has successfully installed, you'll now need to create a deployment workflow and deploy out your application.

In the deployment workflow section, you'll notice that a new deployment workflow was automatically created after the NodeJS site was added. This is a basic deployment workflow shell
that you can use to complete the setup of your deployment workflow. Click on **Complete Setup** on the deployment workflow.

Configure the **VC Provider**, **Repository**, and **Branch To Deploy** fields on the Settings > Code Repository tab and then click **Update**.

Next, on the **NPM Build** tab, add the following:

- **Entry Point:** index.js
- **Build Command:** npm run build --production
- **CWD Path:** append `/dist` to the end
  Click **Update**.

<base-info>
You may need to update the entry point, arguments, build command, and/or cwd path fields based on your package.json file settings. 
The above works for the standard defaults.
</base-info>

## Step 3: Deploy!

If everything looks good, go to the deployments section and deploy! 🚀
