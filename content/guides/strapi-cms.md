---
title: "Deploy a Strapi CMS backend"
description: 'Deploy a Strapi backend and use GitHub Actions to build so you can host on a lower cost server.'
image: 'https://docs.cleavr.io/images/strapi-cms.png'
video: ''
---

<you-tube video="VTflJbYUob8"></you-tube>

## Server selection

Deploying a Strapi CMS with [Cleavr](https://cleavr.io) is straightforward and painless. 

However, to successfully deploy a Strapi CMS, you'll need to consider an appropriate server option up front. 

If you want your server to also build the Strapi application, then you'll want to avoid the cheapest / basic options that
VPS providers offer. The build process for Strapi takes a lot of processing power. More so, than the lowest cost options will be able
to handle. You'll also need to take into consideration how many other apps are being hosted on the server as they will impact 
available processing power during the build run as well. 

Luckily, another option is to utilize Cleavr's [GitHub Actions](/github-actions) integration to have GitHub build Strapi for you. This way, you can then be 
free to use one of the more economic plans. 

## Set up

1. Add a new `NodeJS SSR` app to your server
2. Install a database server and add a database that Strapi will connect to
3. In the **Web App** section, click to complete the setup
4. On the **Code Repository** tab, select the **VC Provider** and **Repository** your project is located at
5. On the **NPM Build** tab, set **Entry Point** to `npm`, **Arguments** to `start`, **Build Commands** to `npm run build --production`, and **Artifacts Path** to `build`
6. If you selected GitHub as your VC Provider and want to utilize GitHub Actions to build you app, then click **GitHub Actions** tab and click to enable 
7. In **Environment**, add the env variables for your project, including the database details added in step 2
8. Deploy!


