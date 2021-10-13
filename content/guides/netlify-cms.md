---
title: 'Netlify CMS'
description: 'Deploy Netlify CMS on your own Cleavr-managed server.'
image: 'https://docs.cleavr.io/images/netlify/netlify-cms.png'
video: ''
---

<you-tube video="Pz-kQJxZx3w">
</you-tube>

[Netlify CMS](https://www.netlifycms.org/) is a light-weight content management system created by Netlify. 

Though, Netlify built their CMS for use with Netlify hosting, it is possible to use Netlify CMS on a self-hosted server. 

In this guide, we'll go through the steps of what it takes to accomplish this. 

## Prerequisites 

- Have an active [Cleavr](https://cleavr.io) account
- Server provisioned and ready to go

## Step 1: Add A NodeJS SSR Site

In Cleavr, go to your provisioned server and add a new site with **App Type** set to **NodeJS SSR**. 

We need to add an app running on our server that will act as a GitHub OAuth Provider. The reason for this, is that Netlify CMS typically uses Netflify
as an authenticator for their CMS. They do allow you to use a custom authenticator, such as GitHub. However, GitHub requires a server. Therefore, we'll be 
adding our own simple OAuth app to perform the magic act. 

<base-info>
The solution that we're walking through will also work for GitLab; however, these instructions will cover having your project on
GitHub. 
</base-info>

Once your site is created, take note of the URL you've assigned to your site.  

## Step 2: Add Project To GitHub

In this guide, I'm using the [Bael Theme by Jake-101](https://github.com/jake-101/bael-template) demo that is listed on [Netlify CMS Examples](https://www.netlifycms.org/docs/examples/). 

Why this project? Simple, it uses Nuxt. 😍 

Add your project to your GitHub account. You can see my fork of the Bael Theme here: [My fork](https://github.com/armgitaar/bael-template)

<base-info>
Unlike our other deployment guides, you'll need to make sure you have ownership over the repository as we'll be making a change to a file. 
</base-info>

## Step 3: Update Config.yml File

In your project, locate the `config.yml` file. In our example project, it's located at `static/admin/config.yml`.

We'll need to update the `backend` portion as follows: 

```yaml
backend:
  name: github
  repo: user/repo
  branch: master
  base_url: https://your.oauth-provider-url.com
```

Be sure to add in the `user/repo` for your project, the branch it is on, and the `base-url` which is the url from step 1. 

Save your changes. 

## Step 4: Create GitHub OAuth App

While we are in Github, let's now create a new GitHub OAuth App. 

Follow the [GitHub OAuth App Guide](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

Which is, essentially navigate, in GitHub, to your account > settings > developer settings > OAuth Apps > New OAuth App. 

Fill in the form as follows: 

- **Application Name**: Fill in with whatever you want to call this OAuth app
- **Homepage URL**: Use the url from step 1
- **Authorization callback URL**: append `/callback` to the url you used above (ie: `https://example.com/callback`)

![GitHub OAuth Application](/images/netlify/oauth.png)

Register the application. 

After creating the app, you'll see the **Client ID**. Copy the client ID and save it for later. 

Click on **Generate a new client secret**. Copy the secret and save it for later. 

## Step 5: Add A Nuxt Static Site

Back in Cleavr, we'll now add a new Nuxt Static site on our server. 

Note that you may choose a different app type, such as NuxtJS Static, if your site is not using Nuxt. 

Once you add the new site, take note of the URL. 

## Step 6: Configure And Deploy OAuth App

### Configure Repo

In the web app section of Cleavr, click into the OAuth Web App and go to Settings >  Code Repository tab. 

Select a GitHub VC profile. 

Fill in **Repository** with `vencax/netlify-cms-github-oauth-provider`. 

We're using the [Netlify CMS GitHub OAuth Provider by Vencax](https://github.com/vencax/netlify-cms-github-oauth-provider) project
for our OAuth provider application. 

Set **Branch to Deploy** to `master`. 

### Configure Build and PM2

Click on the **Build** tab and set **Entry Point** to `app.js`

Within the **PM2 Ecosystem** area, add the following to `env`.

```json
"NODE_ENV": "production",
"ORIGIN": "your.main-site.com",
"OAUTH_CLIENT_ID": "your-oauth-client-id",
"OAUTH_CLIENT_SECRET": "your-oauth-client-secret",
```

Update the **ORIGIN** with the URL for your project (from step 5) and fill in **OAUTH_CLIENT_ID** and **OAUTH_CLIENT_SECRET** with the values
from step 4. 

### Configure Deployment Hooks

Now, go to the Deployment Hooks section and disable the **build** hook.

### Deploy OAuth App

Once you are done with the above, go to the Deployments section and **Deploy**.

Head to your OAuth app and click on the link to authenticate via GitHub to test that it works as expected. 

## Step 7: Configure And Deploy NetLify CMS 

Navigate back to the main web app section and then click in the Nuxt Static site that will be our main site that we are deploying. 

### Configure Repo

Navigate to Settings > Code Repostory. 

Select your GitHub VC profile. 

For **Repository**, add in the repo. In our example, it's `armgitaar/bael-template` and the branch to deploy is `master`.

Save changes. 

### Deploy

The only thing left, deploy! 

Once the site has deployed, append `/admin` to the end of the URL. You should now be able to authenticate via your GitHub OAuth app and
then gain access to the Netlify CMS backend. 

## Tips

To make the most of this setup, enable **Push-to-deploy** in the settings > code repository section. Better yet! Enable the GitHub Actions integration. 
