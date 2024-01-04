---
title: "Environment Variables"
description: "Manage production environment variables."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

## What are environment variables?

Env files typically hold sensitive information for how you apps might connect to other servers, databases, services, etc.

Cleavr lets you override the production .env file on a server by adding the variables to the environment section.

<base-info>
For this functionality to fully work, you'll need to ensure that your stack supports reading from a .env file in production. Many frameworks support this feature out-of-the-box. Otherwise, you may need to install a package in order to set this up correctly. Lastly, some frameworks are phasing out .env files in production. If this is the situation with the framework you are using, trying adding (or synching) the environment variables with PM2 (for Node-based apps only).
</base-info>

## Configure Deployment Workflow Servers

Navigate to your deployment workflow and select Environment. If you have existing environment variables on a server, you can select the
server and fetch the current variables to then make edits. Otherwise, if a fresh app with no variables, you can use either the
text area to copy and paste from your env file, or you can use the form fields view to enter new variables.

Depending on the type of site (PHP, Alpas, Laravel, etc) you will have post synch options available to run post sync. Such as:

- Clear and build config cache (Laravel)
- Reload php-fpm (PHP, Laravel)
- Restart queue (Laravel)
- Restart App (NodeJS, Alpas)

## PM2 Environment Variables

In the Environment section, you can select the option to sync variables with PM2. If you'd like to see the variables, select 'PM2' from the navigation bar to view the PM2 Ecosystem settings.

Some NodeJS frameworks, such as Nuxt and Strapi, are configured to look for production variables from here as opposed to a .env file.
