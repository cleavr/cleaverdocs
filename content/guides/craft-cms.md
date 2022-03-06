---
title: 'Craft CMS'
description: 'Deploy Craft CMS with Cleavr.'
image: 'https://docs.cleavr.io/images/craft-cms.png'
video: 'https://youtu.be/xJt6AgyhNXs'
---

<you-tube video="xJt6AgyhNXs"></you-tube>

[Craft CMS](https://craftcms.com/) is a versatile and flexible php-based content management system. 

In this guide, we'll deploy the [Craft CMS Happy Lager Demo](https://github.com/craftcms/happy-lager). 

## Prerequisites

Provision a fresh app server in your Cleavr account before continuing. 

## Step 1: Add New PHP Site

In Cleavr, navigate to the server you provisioned and add a new site. 

Configure as follows: 

- **App Type**: PHP
- **Domain Name**: use your own custom domain or a free Cleavr domain

Under **Advanced Options**: 
 
- **Web Directory**: `web`
- Enable **Setup Database**
- **Database Type**: MySQL 8.0
- **Database Name**: `happylager`
- **Database User**: <db username>
- **Database Password**: <password>

Be sure to update database user and password with your own username and password. 

Click to **Add** site. 

Once the site installs, go to the Web App section to configure the web app. 

## Step 2: Connect Repository

In the Web App > Settings > Code Repository section, select a GitHub VC profile and configure the repo as follows: 

- **Repository**: `craftcms/happy-lager`
- **Branch to Deploy**: `main`

## Step 3: Enable Install Composer and Deploy

In the **Deployment Hooks** section, enable the **Install Composer Dependencies** deployment hook. 

Now, let's do a quick deploy as we'll need the contents of the repository to be on the server for the next steps. 

Go to the Deployments section and click **Deploy**. 

<base-info>
After the deployment, the site is not expected to render. We just need the project on the server to perform the following steps. 
</base-info>

## Step 4: Add Environment Variables

In Environment tab, add in the following `.env` variables. 

```json

# The environment Craft is currently running in (dev, staging, production, etc.)
ENVIRONMENT=dev

# The application ID used to to uniquely store session and cache data, mutex locks, and more
APP_ID=

# The secure key Craft will use for hashing and encrypting data
SECURITY_KEY=

# Database Configuration
DB_DRIVER=mysql
DB_SERVER=127.0.0.1
DB_PORT=3306
DB_DATABASE=happylager
DB_USER=<db-username>
DB_PASSWORD=<password>
DB_SCHEMA=public
DB_TABLE_PREFIX=

# The URI segment that tells Craft to load the control panel
CP_TRIGGER=admin

# The base site URL
SITE_URL=https://example.com

# The asset base path
ASSET_BASE_PATH=./assets

# The asset base URL
ASSET_BASE_URL=/assets
```

Add a random string of characters for the `APP_ID`. Also, verify the database configuration variables. Finally, replace `SITE_URL` variable with the domain for your site. 

## Step 5: Set Security Key

For the security key, we'll run a command that will create a random key as well as it will automatically add the key to the environment file. 

Click on **Quick Commands** and add a new command and paste in the following command: 

```
php craft setup/security-key
```

Save and run the command. 

## Step 6: Import Database

Now, we'll import the `happylager.sql` file we imported from the code repo into our `happylager` mysql database. 

Let's create a Quick Command for this as well. 

Click **Add New Quick Commands** and add in the following command: 

```
mysql --user=<db-username> --password=<password> happylager < happylager.sql
```

<base-info>
  Remember to change <db-username> and <password> to the username and password that you applied when adding the database.
</base-info>

Save and run the command. 

<base-alert>
Expect to see a warning after running the above command as it will complain about passing a password. 
</base-alert>

## Step 7: Deploy!

You should now be good to deploy! 🚀

To log in, go to append `/admin` to your domain and then user the following credentials: 

- Username: admin
- Password: password
