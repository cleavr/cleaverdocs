---
title: 'Environment Variables'
description: 'Manage production environment variables.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What are environment variables?
Env files typically hold sensitive information for how you apps might connect to other servers, databases, services, etc. 
Cleavr lets you override the production .env file on a server by adding the variables to the environment section.

## Configure Deployment Workflow Servers
Navigate to your deployment workflow and select Environment. If you have existing environment variables on a server, you can select the 
server and fetch the current variables to then make edits. Otherwise, if a fresh app with no variables, you can use either the 
text area to copy and paste from your env file, or you can use the form fields view to enter new variables. 

Depending on the type of site (PHP, Alpas, Laravel, etc) you will have post synch options available to run post sync. Such as: 

- Clear and build config cache (Laravel)
- Reload php-fpm (PHP, Laravel)
- Restart queue (Laravel)
- Restart App (NodeJS, Alpas)
