---
title: 'Flash Deployments'
---

Quickly provision a new server, set up, and deploy your app in one-fell-swoop - giving yourself more time for ☕️, 🚶‍♀️, or 👨🏾‍💻. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/wbwQvp7GFag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## In one-fell-swoop
With Flash Deploy, tell Cleavr what you want to deploy and where to. Cleavr then takes over and - 
- Provisions a new server on your selected cloud hosting provider
- Installs all necessary dependencies according to the web app type
- Collects project code from your repository
- Builds and deploys your app 🚀

Click **Flash Deploy** from the main servers or web apps pages to get started!

## Tell Cleavr about your app

In just a few steps, Cleavr will be working hard for you, freeing up your time for other things. ☕️

### WHAT ARE WE DEPLOYING?

#### App Type

Select from any app type that is supported by Cleavr, including: 
- AdonisJS v4 and v5
- NuxtJS SSR and Static
- Laravel PHP
- NodeJS SSR and Static
- WordPress
- Alpas
- PHP
- Static HTML

#### Version Control Provider

If you have already tied your Cleavr account with a VC Provider, you can select it from the list. If not, you may also select the option to 
connect to your GitHub, GitLab, or Bitbucket account.

<base-info>
This and the following steps are hidden if you've selected WordPress. 
</base-info>

#### Repository

After selecting your VC Provider, you can now enter a repository in any of the following manners: 
- For GitHub, a list of repositories you have access to will be available to select from
- For GitLab or Bitbucket, either enter the full url of the repository or designate by `username/repository-name`
- For GitHub, you can also provide a path to any public repository 

#### Branch to deploy

Enter the name of the branch to deploy. Be sure this branch exists! 

#### Additional settings for NodeJS-based apps
For NodeJS-based apps, including AdonisJS and NuxtJS, you'll also set the following: 
- Entry point 
- Arguments
- Build command (for Node SSR and Static apps)
- Artifact path (for Node SSR and Static apps)

### WHERE ARE WE DEPLOYING TO?

#### Server Provider

Select a VPS Provider that Cleavr will provision a new server on. You can choose an existing VPS Provider that you have connected with Cleavr, choose
to connect to a provider at this time, or select Custom Server if you'd prefer to use a provider Cleavr does not currently integrate with. 

<base-alert>
If you select custom, then you will be asked to run a script on the server and add ther server's public IP. 
</base-alert>

#### Server Plan

Choose the plan type you'd like Cleavr to set up on your server. 

Just a reminder, you will be billed separately by the provider for the plan you choose. 

#### Server Reqion

Select which server region to provision a server at. 

### HOW ARE WE PERSISTING DATA?

Many dynamic apps require a database to connect to. You can have Cleavr also install a database server on your new server, create a new database, 
and a new database user. Cleavr will also take care of adding variables to your production .env file. 

Choose from either a MySQL style database (Maria, MySQL) or a PostgreSQL database. 

Cleavr will create random database name, user name, and password. However, you can choose to change them if you'd like. 

### ANY ADDITIONAL VARIABLES NEEDED?

#### Server name 

Cleavr will assign a random server name, but you can customize it. 

#### Domain

A free cleavr.rocks domain will be created for your site. But, don't worry! You can apply your own custom domain name afterwards. 

#### Environment Variables

If your app type requires an .env file, we'll pre-populate one for you based on your selected app type. If any additional environment
variables are required for your app in production, please add them here. You can always modify these variables later in the `web app > environment` section. 

### DEPLOY! 🚀

When you're done with the settings, deploy away!

Cleavr will run through the process of provisioning a new server, adding a new site to the server, creating a new web app, and then 
will deploy your web app. You'll receive an email when the Flash Deployment is complete. 📬
