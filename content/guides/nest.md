---
title: "Deploy a Nest JS app"
description: 'Deploy a NestJS web application.'
image: 'https://docs.cleavr.io/images/nest.png'
video: ''
---

Per [Nest](https://nestjs.com) - 

*"Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely 
coupled, and easily maintainable applications. The architecture is heavily inspired by Angular."*

[Cleavr](https://cleavr.io) deploys Nest JS applications with minimal configurations required. 

## Prerequisite - ensure Port is not hardcoded

Creating a new Nest JS site via their CLI will add a hard coded port number for the app to listen on. You'll want to update this to listen to `process.env.PORT`
as Cleavr randomly assigns port numbers for sites AND this will allow you to host multiple apps on your server. 

In your Nest JS project, open the `main.ts` file and update as follows: 

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
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
- **Entry Point:** main.js
- **Build Command:** npm run build --production
- **Artifact Path:** dist
Click **Update**. 

<base-info>
You may need to update the entry point, arguments, build command, and/or artifact path fields based on your package.json file settings. 
The above works for the standard defaults.
</base-info>

## Step 3: Deploy! 
If everything looks good, go to the deployments section and deploy! 🚀
