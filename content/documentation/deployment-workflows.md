---
title: "Adding New Deployment Workflows"
description: "Add new deployment workflows to Cleavr."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

## What is a deployment workflow?

In Cleavr, a deployment workflow consists of the setup and actions that come together to deploy your web applications.

When you add a site, a shell deployment workflow will automatically be created. All you need to do is configure the workflow by connecting to the code
repository to be used, setup any additionally required deployment hooks, add any required environment variables, and then deploy.

<base-info>
For WordPress sites, you do not need to set up a deployment workflow 
as once you create the WordPress site, you are all ready to go to head over to the URL you set up and manage WordPress via its user interface.
</base-info>

## Adding a new deployment workflow

To add a new deployment workflow, go to the Deployments section.

Click the **Add New Workflow** button, provide a **Name** for the workflow and select the related **Site**, and then click **Add**.

The next thing you'll want to do now, is update the [Workflow Settings](/workflow-settings).
