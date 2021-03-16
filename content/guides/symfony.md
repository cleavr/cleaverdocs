---
title: 'Deploy a Symfony app'
description: 'How to deploy a Symfony app with Cleavr.'
image: 'https://docs.cleavr.io/images/symfony.png'
video: ''
---

[Symfony](https://symfony.com/) is a PHP web framework that helps you speed up the development of your PHP-based web apps. 

Deploying Symfony apps with [Cleavr](https://cleavr.io) is quick and painless. 

In this guide, we will setup and deploy the [demo blog application](https://github.com/symfony/demo). 

## Step 1: Install demo project on your local

First, work through the instructions on the [demo project's readme file](https://github.com/symfony/demo) to copy the project
to your local environment. 

Run the app on your local to make sure it runs as expected. 
 
Add the project to your favorite Git repo; make sure to not save the `.env` file to your repo. 

## Step 2: Provision new server

In Cleavr, provision a new server. Make sure to install a version of **PHP** as well as **NodeJS**. 

## Step 3: Add a PHP site

Once the server is finished provisioning, add a new PHP site to the server. 

When adding the PHP site, set the **Web Directory** to point to the `public` folder.

## Step 4: Set up database (optional)

The demo app, by default, is configured to use a sqlite db. However, you can set up the app to use MySQL or Postgres. 

In this example, we'll setup a MySQL server. 

In Cleavr > Server > click the database tab and install MySQL 8.0. 

Once installed, add a new database with a corresponding user and password. 

Remember the credentials as we'll use these later when setting up the environment variables. 


## Step 5: Configure web app

Once the site has been added, go to the Web App section and click **Complete Setup** for the web app that was just added
after creating the new site. 

### Configure Code Repository

Configure the app to pull from the **repository** you are storing your code on and also identify the **branch to deploy**.

Click **Update**. 

### Configure .env 

Select the **Environment** tab and then add in the environment variables for the app. 

Below is the default added to the project. Use it as reference to add in the required variables.

**Make sure to set `APP_ENV` to `prod`.**

```
# In all environments, the following files are loaded if they exist,
# the latter taking precedence over the former:
#
#  * .env                contains default values for the environment variables needed by the app
#  * .env.local          uncommitted file with local overrides
#  * .env.$APP_ENV       committed environment-specific defaults
#  * .env.$APP_ENV.local uncommitted environment-specific overrides
#
# Real environment variables win over .env files.
#
# DO NOT DEFINE PRODUCTION SECRETS IN THIS FILE NOR IN ANY OTHER COMMITTED FILES.
#
# Run "composer dump-env prod" to compile .env files for production use (requires symfony/flex >=1.2).
# https://symfony.com/doc/current/best_practices.html#use-environment-variables-for-infrastructure-configuration

###> symfony/framework-bundle ###
APP_ENV=prod
APP_SECRET=2ca64f8d83b9e89f5f19d672841d6bb8
# TRUSTED_PROXIES=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16
# TRUSTED_HOSTS='^(localhost|kxduvgrzle1308\.cleaver\.rocks)$'
###< symfony/framework-bundle ###

###> doctrine/doctrine-bundle ###
# Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
# For a MySQL database, use: "mysql://db_user:db_password@127.0.0.1:3306/db_name"
# For a PostgreSQL database, use: "postgresql://db_user:db_password@127.0.0.1:5432/db_name?serverVersion=11&charset=utf8"
# IMPORTANT: You MUST configure your server version, either here or in config/packages/doctrine.yaml
DATABASE_URL=mysql://user:password@127.0.0.1:3306/db_name
###< doctrine/doctrine-bundle ###

###> symfony/mailer ###
# MAILER_DSN=smtp://localhost
###< symfony/mailer ###
```
<base-info>
If you added the MySQL database in the previous steps, replace <b>user</b>, <b>password</b>, and <b>db_name</b> on the 
<b>DATABASE_URL</b> string. 
</base-info>

### Configure deployment hooks

In the **Hooks** section, enable **Install Composer Dependencies** and **Install Yarn Packages** hooks. 

We'll also need to add a new hook with the build command. 

```
cd {{ releasePath }}
npm run build
```
Place the hook below **Install Yarn Packages**.

## Step 6: deploy! 

If everything is configured and looks good, deploy! 🚀

## Troubleshooting and Resources

Look for additional deployment tips? Check out the [How to Deploy a Symfony Application](https://symfony.com/doc/current/deployment.html) Symfony documentations. 

Looking for the Symfony error logs? 

They are typically located in: 

```
/home/cleavr/<site-name>/current/var/log/prod.log
```
