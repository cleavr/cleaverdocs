---
title: "Deploy an Adonis JS app"
description: 'Deploy an Adonis web application.'
image: 'https://docs.cleavr.io/images/adonis.png'
video: ''
---

Cleavr gives extra treatment for Adonis so that you can easily deploy your Adonis v4 and v5 apps with just a couple of clicks.

On top of that, Cleavr also automatically installs and configures PM2 to run your app and to keep it up. Further to that, 
Cleavr sets PM2 to run in cluster mode to take advantage of available cores for added site performance.  

You can add your Adonis app either in one fell-swoop with flash-deploy or add your app to an existing server. In this guide, we'll 
add a Adonis app to an existing server. 

## Add an Adonis site

On an existing server, click **Add Site** to add a new site to your server. 

You'll see a web app type option for Adonis. Clicking on the ellipses will allow you to select between version 4 or version 5 of Adonis. 

### Which option should you choose?

Which option you select depends on which version of Adonis you are using for your app. 

If you are unsure, you can check the version number in your project's `package.json` file. Under dependencies, check the version number for
`adonisjs/core`. 

### Add site with database

In all likelihood, you'll be using a database with your application. When creating a site, select the option to **Set up database**. You can then choose to install
a database server if one has not already been installed on your server and you can edit the database name, user, and password that will be used for your app. 

<base-info>
When setting up a database using this method, Cleavr will also automatically add the database variables to the .env file. You can see and edit the variables
in the Web App > Environment section. 
</base-info>


## Add a Web App

After the site has successfully installed, you'll now need to create a web app and deploy out your app. 

In the web app section, you'll notice that a new web app was automatically created after the Adonis site was added. This is a basic web app shell
that you can use to complete the setup of your web app. Click on **Complete Setup** on the web app. 

<base-info>
For more complex apps that have multi-server architecture (multiple web app servers, database servers, queue servers, etc), then you'll want to 
create a new web app so you can define which servers are part of the app's server architecture.
</base-info>

Configure the **VC Provider**, **Repository**, and **Branch To Deploy** fields on the Settings > Code Repository tab and then click **Update**.

From here, you may have additional configurations to make depending on how you set up your web app: 

- If you are using GitHub for the VC Provider, consider enabling the GitHub Actions integration in the settings area so that you can use GitHub to build your app, which frees up your server's resources during deployments
- The Hooks section has default deployment hooks to deploy your apps. If you have additional commands to run during deployment, create a custom deployment hook and add it to the correct order placement that it should run in during deployments
- You may also want to enable **Migrate Database** in the deployment hooks section for your initial deployment run

If everything looks good, go to the deployments section and deploy! 🚀

<base-info>
<strong>Deployment issues?</strong> Check out the <a href="/adonis-deployments">Adonis deployments troubleshooting docs</a> for common deployment
issues and tips for troubleshooting and fixing. 
</base-info>
