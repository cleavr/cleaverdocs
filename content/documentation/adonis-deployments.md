---
title: 'Adonis Deployments Troubleshooting'
description: 'Troubleshoot common Adonis deployment issues.'
image: 'https://docs.cleavr.io/images/newsite.png'
video: ''
---

If your deployment has an error or you see a **502 Bad Gateway** error when navigating to your website, then it could be 
that you have missed a step setting up your site/app or when deploying your web app. 

<base-info>
This guide lists many of the common reasons why Adonis deployments fail. If these troubleshooting tips do not work for 
your case, check to see if a similar issue to yours was raised on the forum. If not, raise your 
issue on the <a href="https://forum.cleavr.io/">forum</a> or by <a href="mailto:hello@cleavr.io">email</a>. 
</base-info>

## Site and app setup
Check the following common setup issues to see if they resolve your issue. 

### Did you designate the correct entry point?
#### 502 Bad Gateway 

For Adonis apps, Cleavr defaults the entry point to server.js. However, this may not be the correct entry point for your app. 

Common entry points for Adonis:

- index.js
- server.js
- app.js

Check your app's `package.json` file and see how the start script is configured. 

then, you can simply add `npm` as the entry point and pass `start` as an argument. 

### Did you set up a database?
#### Site cannot be reached  | Various issues

If an app has a database dependency and the database is not setup or is not correctly associated to your app, then it may 
appear the site is broken when visiting your website. 

If your app requires a database, make sure you set up the correct database type, that you have added a database name, 
user, and password and that your app's database connection variables match how you setup your database. 

View and edit your .env file in web app > environment section. Take note, Adonis 4 and Adonis 5 label the database name 
differently. Add database name to both options if you are in doubt of the version of Adonis you are using.

### Check the app log report
#### Site cannot be reached  | Various issues

It can be that the app setup and deployment are all configured and deployed successfully. However, there are other issues afoot. 
If the above troubleshooting tips do not help solve the issue, then go to web app > logs and fetch your production app logs 
from the server to see if there are any app specific issues. 

### Deployment step errors
The following are how you can troubleshooting common deployment step errors. 

#### Check the deployment log for the failed deployment step
Each deployment step has a log that you can view to gain insight on the success or failure of the deployment step. If 
Cleavr encounters an error for any step, then Cleavr will automatically abort the deployment. 

#### Deployment steps can typically fail for the following reasons: 

- A dependency is not available - eg: Build App hook was not activated which resulted in Activate New Deployment failing due to dependencies not being installed
- An app dependency defined in `package.json` is not available, misconfigured, missing, etc. 
- A custom deployment hook was misconfigured

### Does your app require a custom deployment hook? 
Cleavr offers a list of common deployment hooks that satisfy deployments for the majority of Adonis version 4 and 5 apps. 
However, you may have some unique needs or steps that need to occur during deployment for your app to successfully deploy. 

**Custom deployment hooks** can be created and enabled in Cleavr to help cover your specific cases. In the web app > deployment 
section, you can add new deployment hooks with custom scripts to run. You can then order the hooks to run in the required order. 
Refer to the [deployment hooks](/deployment-hooks) section for more info on setting up and configuring custom deployment hooks. 
