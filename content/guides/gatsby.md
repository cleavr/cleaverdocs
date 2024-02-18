---
title: "Gatsby"
description: "Deploy Gatsby with Cleavr."
image: "https://docs.cleavr.io/images/gatsby.png"
video: "https://youtu.be/cDIRuzsnB5w"
---

<you-tube video="cDIRuzsnB5w"></you-tube>

[Gatsby](https://www.gatsbyjs.com/) is a static front-end generator and is popular with React framework developers.

In this guide, we'll deploy the [Gatsby Starter Blog template](https://github.com/gatsbyjs/gatsby-starter-blog).

## Prerequisites

Provision a fresh app server in your Cleavr account before continuing.

## Step 1: Install Gatsby CLI

We'll install the Gatsby CLI on our server. If you look at the Gatsby `package.json` files in many projects, you'll see that the build and start commands
use the Gatsby CLI to run commands. You can also configure to use npm/npx commands, but we might as well roll with the Gatsby CLI for this guide.

In Cleavr, navigate to the **Quick Script** section and add a new quick script with the following:

```
npm install -g gatsby-cli
```

Run the above command on the server you'll be adding your Gatsby project to.

## Step 2: Add New Site

On your server, add a new **NodeJS Static** site.

Fill in the following advanced options:

- **Build Commands**: `gatsby build`
- **Artifacts Path**: `public`

<base-info>
You can also set the above settings in the deployment workflow > settings > build section.
</base-info>

Once the site is successfully added, head over to the deployment workflow section and click on your site's corresponding deployment workflow.

## Step 3: Configure Deployment Workflow Repository

In the settings > code repository section of your deployment workflow, fill in the required fields.

- **VC Profile**: select the VC profile where your code is - we're using a GitHub profile in our example
- **Repository**: Add the repository where your code is, ours is in `gatsbyjs/gatsby-starter-blog`
- **Branch to deploy**: Add in the branch to deploy, our example uses `master`

**Save** the configuration.

## Step 4: Deploy!

You can now deploy your app!

<base-point>
The npm install and build times can take a while for Gatsby projects. If you are using GitHub for your code repo, we recommend enabling the GitHub Actions
integration in deployment workflow settings so that the project builds on GitHub, saving your server's resources. 
</base-point>
