---
title: "Deployments"
description: "Cleavr makes deployments effortless."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

## What is a deployment?

A deployment is the process of delivering your web app to your provisioned server(s). Cleavr lets you manage various facets
of the deployment process to fit your particular needs.

![Cleavr deployment details for active and past deployments](/images/deployment/cleavr-deployment-details.png)

## Trigger a deployment

Before you trigger a deployment, ensure you have your deployment workflow’s environment variables setup on your servers and the
appropriate hooks configured and enabled.

There are several ways to trigger a deployment:

- Cliking the **Deploy** button for the deployment workflow
- Push-to-deploy will deploy when new commits are submitted
- GitHub Actions, available for NodeJS apps, will trigger a deployment with either method above

## Cancel a deployment

If you need to cancel an active deployment for whatever reason, you can cancel on the deployment page.

## Deployment status

As a deployment is occurring, a deployment in process status will be visible. Once complete, the status will show as Active
or Error. If the deployment was cancelled, the status will show as Cancelled for that deployment.

## Health checks

Once a deployment is complete, Cleavr will display ping results and status codes from various global locations.

![Cleavr deployment ping results from global servers](/images/deployment/cleavr-deployment-ping-results.png)

## Deployment troubleshooting

In case of an error when deploying a web app, select the deployment row of interest to view the deployment actions.
Each deployment action will show a status for that action. If one action fails, then the proceeding steps will be marked as Aborted.

For the action that errors, select the row and then select the Log at the bottom of the page to view the log details for
that action. Typically, the reason for failure can be found in the log.

![Cleavr deployment step error details](/images/deployment/cleavr-deployment-step-error.png)

If more information is required, first, double check that the order of deployment hooks and the details of the hooks make
sense for the application you are deploying. If the hooks are appropriate, then the next recommended place to check for
troubleshooting are the logs.

**Helpful logs are located in:**

- Deployment Workflow Log Report (for NodeJS applications)
- PM2 Logs - click the **Load PM2 Logs** button in the deployment details page for NodeJS apps
- Services Logs - located in the server section

<base-info>
For app specific troubleshooting help, check out
<ul>
    <li>
        <nuxt-link to="/adonis-deployments">Adonis deployment troubleshooting</nuxt-link>
    </li>
    <li>
        <nuxt-link to="/nodejs-deployments">NodeJS deployment troubleshooting</nuxt-link>
    </li>
    <li>
        <nuxt-link to="/laravel-deployments">Laravel deployment troubleshooting</nuxt-link>
    </li>
</ul>
</base-info>

## Deployment Rollback

If you need to rollback to a previous deployment, select the **Rollback** option located under the overflow menu.

![Cleavr deployment rollback](/images/deployment/cleavr-deployment-rollback.png)
