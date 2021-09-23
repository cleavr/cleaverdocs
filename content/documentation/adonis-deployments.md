---
title: 'Adonis Deployments Troubleshooting'
description: 'Troubleshoot common Adonis deployment issues.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

If your deployment has an error or you see a **502 Bad Gateway** error when navigating to your website, then it could be 
that you have missed a step when setting up your site/app or when deploying your web app. 

<base-info>
This guide lists many of the common reasons why Adonis deployments fail. If these troubleshooting tips do not work for 
your case, check to see if a similar issue to yours was raised on the forum. If not, raise your 
issue on the <a href="https://forum.cleavr.io/">forum</a>. Also, you can check out the
 <a href="/guides/adonis">Adonis deployment guide</a> for guidance on standard Adonis app setup and deployments. 
</base-info>

## Site and app setup
Check the following common setup issues to see if they resolve your issue. 

### Using the correct version of NodeJS?
For Adonis version 5, it's recommended you use NodeJS 15.x.

### Check the logs
#### Symptom(s): Site cannot be reached  | 502 | Various issues

One of the first steps in troubleshooting is to look at the logs. If the site shows a 502 error, one of the best logs to look at is the PM2 log. 

Here are the applicable logs to look at in Cleavr: 
- **Logs Report** in the web app section display web app specific logs
- **PM2 Logs** is typically the most helpful for 502 errors and can be found in: 
    - In the deployment details page, click **View PM2 Logs**
    - In the server > logs > select PM2 Logs
    - in the server > services > select **Check Heartbeat** for the version of NodeJS that's installed
- **NGINX Logs** show errors at the web server level and can be found in: 
    - In the server > logs > NGINX errors
    - In the server > services > NGINX heartbeat
   
### PM2 Start Issues
#### Symptom(s): 502 Bad Gateway 

Sometimes, it may be the PM2 just needs a restart for the app to come alive. 

You can restart PM2 on the web app deployment page. 

![PM2 app status](/images/deployment/cleavr-app-status.png)

### Did you designate the correct entry point?
#### Symptom(s): 502 Bad Gateway 

For Adonis apps, Cleavr defaults the entry point to `server.js`. However, this may not be the correct entry point for your app. 

Common entry points for Adonis:

- `index.js`
- `server.js`
- `app.js`

### Did you set up a database?
#### Symptom(s): Site cannot be reached  | Various issues

If an app has a database dependency and the database is not setup or is not correctly associated to your app, then it may 
appear the site is broken when visiting your website. 

If your app requires a database, make sure you set up the correct database type, that you have added a database name, 
user, and password and that your app's database connection variables match how you setup your database. 

View and edit your `.env` file in web app > environment section. 

<base-info>
Adonis 4 and Adonis 5 label the database key name differently.
</base-info>

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

### Are your environment variables correct?
Environment variables that are missing values or that have the wrong value (be sure to triple check because it can be easy to miss).

This can be as small of a mistake as adding an IP where `localhost` is expected.
