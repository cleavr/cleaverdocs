---
title: 'Deployments'
description: 'Cleavr makes deployments effortless.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What is a deployment?
A deployment is the process of delivering your web app to your provisioned server(s). Cleavr lets you manage various facets 
of the deployment process to fit your particular needs.

## Trigger a deployment
Before you trigger a deployment, ensure you have your web app’s environment variables setup on your servers and the 
appropriate hooks configured and enabled.

There are two ways to trigger a deployment. If push to deploy is enabled, then committing changes to the git repository branch 
you configured for Cleavr to watch will trigger an automatic deployment.  

The other method is to select the Deploy button that is visible on the web apps list and on the web app Deployments screen.

If you need to cancel an active deployment for whatever reason, you can cancel on the web app’s deployment page.

## Deployment status
As a deployment is occurring, a deployment in process status will be visible. Once complete, the status will show as Active 
or Error. If the deployment was cancelled, the status will show as Cancelled for that deployment. 

## Deployment troubleshooting
In case of an error when deploying a web app, select the deployment row of interest to view the deployment actions. 
Each deployment action will show a status for that action. If one action fails, then the proceeding steps will be marked as Aborted.

For the action that Errors, select the row and then select the Log at the bottom of the page to view the log details for 
that action. Typically, the reason for failure can be found in the log.  

If more information is needed, first, double check that the order of deployment hooks and the details of the hooks make 
sense for the application you are deploying. If the hooks are appropriate, then the next recommended place to check for 
troubleshooting are the logs on the server. Securely connect to your server, and check logs in the `/tmp` folder to see if 
you can trace down the culprit.

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
