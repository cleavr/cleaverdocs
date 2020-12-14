---
title: 'Laravel Deployments Troubleshooting'
description: 'Troubleshoot common Laravel deployment issues.'
---

The main reason for Laravel deployments failing is typically due to a required operation not being ran during the deployment process. Cleavr's deployment process is very flexible and typically all you need to do is enable a default deployment hook, such as Build Assets, or add a new custom deployment hook if your app requires customized scripts to run during deployment.

<base-info>
This guide lists many of the common reasons why Laravel deployments fail. If these troubleshooting tips do not work for 
your case, check to see if a similar issue to yours was raised on the forum. If not, raise your 
issue on the <a href="https://forum.cleavr.io/">forum</a> or by <a href="mailto:hello@cleavr.io">email</a>. 
</base-info>

## Site and app setup
Check the following common setup issues to see if they resolve your issue. 

### Are you clearing cache correctly?
If your route definitions are using closures or anonymous definitions, then this will impact clearing cache. You can run `php artisan route:list` and check the **Action** column to make sure no routes are listed using **Closure**.

You'll want to either remove the routes with closures or move them to a controller. 

### Did you build production assets?

#### Site cannot be reached 

If you go to your website and your browser says something such as "This site can't be reached", as is the message that 
appears in Chrome, then check to see if you need to build production assets.

Not all apps require production assets to be built. However, Cleavr adds a Build Frontend Production Assets deployment hook 
and disables it by default. If your app requires assets to be built, enable Build Assets in web apps > deployment hooks and 
then re-deploy your app. 

### Did you set up a database?
#### Site cannot be reached  | Various issues

If an app has a database dependency and the database is not setup or is not correctly associated to your app, then it may 
appear the site is broken when visiting your website. 

If your app requires a database, make sure you set up the correct database type, that you have added a database name, user, 
and password and that your app's database connection variables match how you setup your database. 

You can view and edit .env variables in web app > Environment. 

### Check the app log report
#### Site cannot be reached  | Various issues

It can be that the app setup and deployment are all configured and deployed successfully. However, there are other issues afoot. 
If the above troubleshooting tips do not help solve the issue, then go to web app > logs and fetch your production app logs 
from the server to see if there are any app specific issues. 

## Deployment step errors
The following are how you can troubleshooting common deployment step **errors**. 

### Check the deployment log for the failed deployment step
Each deployment step has a log that you can view to gain insight on the success or failure of the deployment step. If Cleavr 
encounters an error for any step, then Cleavr will automatically abort the deployment. 

#### Deployment steps can typically fail for the following reasons: 

- A dependency is not available - eg: Install Install NPM Packages deployment hook was not activated which result in Build 
Frontend Production Assets failing due to dependencies not being installed
- An app dependency is not available, misconfigured, missing, etc. 
- A custom deployment hook was misconfigured

## Does you app require a custom deployment hook? 
Cleavr offers a list of common deployment hooks that satisfy deployments for the majority of Laravel apps. However, you may 
have some unique needs or steps that need to occur during deployment for your app to successfully deploy. 

**Custom deployment hooks** can be created and enabled in Cleavr to help cover your specific cases. In the web app > deployment 
section, you can add new deployment hooks with custom scripts to run. You can then order the hooks to run in the required order. 
Refer to the [deployment hooks section](/deployment-hooks) for more info on setting up and configuring custom deployment hooks. 
