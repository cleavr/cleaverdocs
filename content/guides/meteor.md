---
title: "Deploy a Meteor app"
description: 'Deploy a Meteor JS web application.'
image: 'https://docs.cleavr.io/images/meteor.png'
video: ''
---

Meteor is a do-everything JavaScript framework where you can easily make cross-platform apps for web and mobile.

There are a couple additional steps required to deploy a Meteor app compared to other NodeJS-based frameworks; but, the steps are relatively
straight forward and we'll cover them in this guide. 

It's also important to note that due to how Meteor requires the server to be configured, that you will not be able to host multiple apps on the server. 

<base-info>
Flash deployments won't fully work for Meteor apps as we'll need to add additional deployment hooks. You can still get started using a flash deployment and
then update the server and web-app with the required additional configs afterwards. 
</base-info>

## Provision server and add site

Provision a new server and add a NodeJS SSR site (make sure NodeJS v12 is installed over v14).

## Install Meteor on your server and add Env Variables

Add your [SSH key](/ssh-keys) to the server on the server > ssh keys page and then SSH into the server. 

Run the following command to install Meteor on your server. You'll need your SUDO password on hand. 

```
curl https://install.meteor.com/ | sh
```

In the `/home/cleavr` directory, which is the directory you will be put into when you SSH into the server as the `cleavr` user, add the environment variables. 

```
cd /home/cleavr
export ROOT_URL='https://example.com'
export MONGO_URL=''
```
Replace `example.com` with your apps URL. Enter Mongo_URL if using a database. 

<base-info>
If you used a different server user to setup the site, then use that server user name instead of cleavr. Also, if you're wondering why environment variables are being added this way, 
that is because Meteor doesn't read from .env file but reads from the server environment variables instead, which will be required to add to the main shell 
and cannot be added via child shells used for deployment hook scripts. 
</base-info>

## Configure your web app

In the web app section, click on **Complete Setup** for the web app created after adding the new NodeJS site. 

### Code Repository Settings

Fill in the code repository settings with the VC provider your code is on, the repository, and branch to deploy. 

Click **Update** to save. 

### NPM Build Settings

Add in the following: 

- **Entry Point:** main.js
- **Build Command:** meteor build public --server-only
- **Artifact Path:** public

Click **Update** to save. 

### Deployment Hook Settings

We'll need to add a couple of deployment hooks. When Meteor builds the app per the build command above, it packages the build in a .tar bundle. 
We'll need to unpackage the file, move the contents out to the public directory, and install required packages as well as declare required environment
variables. 

**Create the following custom deployment hooks**

#### Extract bundle

```bashscript
cd {{ releasePath }}/public
tar -xf *.tar.gz
mv {{ releasePath }}/public/bundle/* {{ releasePath }}/public
```

This hook will extract the build bundle and move the contents to the public directory. 

#### npm install

We'll need to run `npm install` after the build bundle is extracted so that required dependencies are installed. 

```bashscript
cd {{ releasePath }}/public/programs/server
npm install
```

#### Order the web hooks

Ensure the web deployment hooks are in the following order - 

- Copy Project
- Install Packages
- Build Assets
- Extract bundle
- Npm Install
- Activate New Deployment
- Clean Old Deployments

## Deploy! 

This will be a two step process for the initial deploy. 

In Cleavr, deploy your project. 

Once it is finished, you'll notice a 502 error. This is due to the PM2 process starting when we initially created the site and it will require a 
hot restart in order to pick up the env variables. 

SSH into the server and navigate to the project's current folder: 

```cd /home/cleavr/<site name>/cleavr```

Now, check to see what ID he current site is running on: 

```pm2 status```

Next, delete the process by running the following: 

```pm2 delete <process id>```

Now, restart the process: 

```pm2 start .cleavr.config.js``` 

Check your site and you should see it up and running! 

Note - you should not have to run this hard reset process the next time you deploy. 

