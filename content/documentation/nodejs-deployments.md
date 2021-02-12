---
title: 'NodeJS Deployments Troubleshooting'
description: 'Troubleshoot common NodeJS deployment issues.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

If your deployment has an error or you see a **502 Bad Gateway** error when navigating to your website, then it could be that 
you have missed a step setting up your site/app or when deploying your web app. 

<base-info>
This guide lists many of the common reasons why NodeJS deployments fail. If these troubleshooting tips do not work for 
your case, check to see if a similar issue to yours was raised on the forum. If not, raise your 
issue on the <a href="https://forum.cleavr.io/">forum</a> or by <a href="mailto:hello@cleavr.io">email</a>. 
</base-info>

The following are the most common reasons for 502 errors: 

- PORT Address in code is hard coded
- Database connection not established
- Entry point and artifact paths not correctly defined

<base-point>
Check the <a href="/guides">guides</a> section to see if the app you are deploying has an associated guide. The guides will help you
correctly delpoy you apps. 
</base-point>

## Site and app setup

#### Did you set up your port address? 
##### 502 Bad Gateway

Cleavr automatically assigns a port number when you create a new site. You can see the assigned port number by clicking site the info box.

For many NodeJS frameworks, including NuxtJS, Cleavr is able to automatically assign the port to the app and successfully activate it. 

Many frameworks "Quick Start" applications will hard code the Port Number; often set to 3000. Typically, the port number is set in the index.js/ts, 
server.js/ts, or main.js/ts files. Check where the port number is identified and update the code to look first to `process.env.PORT`. 

For example, in a Nest JS app, you'd update the `main.ts` file as follows: 

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
```

To double check if your app is running on the correct port, first check the port Cleavr assigned your app. You can do this by clicking on the site name on the server list
to view additional info about the app, including the assigned port number. 

![assigned port](/imgages/app-port.png)

Then, SSH into your server and run the following command:

```bashscript
sudo lsof -i -P -n | grep LISTEN
```

This will display all of the active ports. Check to see that your **node** app is running on the assigned port. 

![used ports](/imgages/used-port.png)

If the app is running on port 3000, you will need to update the Port Number to refer to the port assigned by Cleavr. 

### Did you designate the correct entry point?
#### 502 Bad Gateway 

For NodeJS apps, Cleavr defaults the entry point to index.js. However, this may not be the correct entry point for your app. 

Common entry points for NodeJS:

- index.js
- server.js
- app.js

For example, if your `package.json` file includes the following - 

```json
"scripts": { "start" : "node app.js" },
```

then, you will need to set the entry point as `app.js`.

The entry point is configured in the web app settings. 

Cleavr also supports running start scripts. For example, if your `package.json` file contains the following -

```json
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start",
  "generate": "nuxt generate"
}
```

then, you can simply add `npm` as the entry point and pass `start` as an argument. 

### Did you build production assets?
#### Site cannot be reached 

If you go to your website and your browser says something such as "This site can't be reached", as is the message that may 
appear in Chrome, then check to see if you need to build production assets.

Not all apps require production assets to be built. However, Cleavr adds a **Build Assets** deployment hook and disables 
it by default. If your app requires assets to be built, enable Build Assets in web apps > deployment hooks and then re-deploy your app. 

### Did you set up a database?

#### Site cannot be reached  | 502 Error | Various issues

If an app has a database dependency and the database is not setup or is not correctly associated to your app, then it may 
appear the site is broken when visiting your website. For some frameworks, such as Strapi, this may result in a 502 error. 

If your app requires a database, make sure you set up the correct database type, that you have added a database name, user, 
and password and that your app's database connection variables match how you setup your database. 

### Check the app log report

#### Site cannot be reached  | Various issues

It can be that the app setup and deployment are all configured and deployed successfully. However, there are other issues afoot. 
If the above troubleshooting tips do not help solve the issue, then go to web app > logs and fetch your production app logs 
from the server to see if there are any app specific issues. 

The app log report is typically good at letting you know what the issue is. However, it can sometimes be opaque. Such as, you may not see an error 
around a lack of database connection; however, the lack of database connection can indeed be the root cause for the errors. 

## Deployment step errors
The following are how you can troubleshooting common deployment step **errors**. 

### Check the deployment log for the failed deployment step

Each deployment step has a log that you can view to gain insight on the success or failure of the deployment step. 
If Cleavr encounters an error for any step, then Cleavr will automatically abort the deployment. 

#### Deployment steps can typically fail for the following reasons: 

- A dependency is not available - eg: Install NPM Packages deployment hook was not activated which result in Build Assets failing due to dependencies not being installed
- An app dependency defined in package.json is not available, misconfigured, missing, etc. 
- A custom deployment hook was misconfigured

### Does you app require a custom deployment hook? 
Cleavr offers a list of common deployment hooks that satisfy deployments for the majority of NodeJS apps. However, you may 
have some unique needs or steps that need to occur during deployment for your app to successfully deploy. 

**Custom deployment** hooks can be created and enabled in Cleavr to help cover your specific cases. In the web app > deployment 
section, you can add new deployment hooks with custom scripts to run. You can then order the hooks to run in the required order. 
Refer to the [deployment hooks section](/deployment-hooks) for more info on setting up and configuring custom deployment hooks. 
