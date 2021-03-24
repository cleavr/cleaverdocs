---
title: 'Deploy Directus'
description: 'How to deploy Directus to your server.'
image: 'https://docs.cleavr.io/images/directus/directus.png'
video: ''
---

[Directus](https://directus.io/) is and open source app that wraps your new or existing SQL database with a realtime GraphQL + REST API for developers, and an intuitive admin app for non-technical users. It supports PostgreSQL, MySQL, SQLite, Microsoft SQL Server, OracleDB, MariaDB, AWS Aurora and more.

Directus mirrors your custom database, with your schema and content stored pure and unaltered. When it comes time to ingest, fetch, or update your data, you can use our REST+GraphQL API, JavaScript SDK, or even pure SQL. Directus gives you plenty of access options to choose from.

## Prepare the Directus package

Create a new directory, and add a package.json by running the following command:
```
npm init -y
```

Add the `build` and `start` aliases script to the package.json:
```
{
  ...
  "scripts": {
    "start": "directus start",
    "build": "npx directus bootstrap",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  ...
}
```

Install Directus by running the following command:
```
npm install directus
```

The package.json content will look like this:
```
{
  "name": "directus-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "directus start",
    "build": "npx directus bootstrap",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "directus": "^9.0.0-rc.51"
  }
}
```

Push the package.json to your GitHub repository.

## Add new NodeJS SSR app

On a new server, add a new site, select **NodeJS SSR** as the app type.

![Add new NodeJS SSR](/images/directus/new-ssr.png)

Once the site has been successfully added, go to the site's settings and click the **NGINX Config** tab.

Since Directus, by default, is configured to run on port 8055, we will need to update the `proxy_pass` setting to reflect that.

Find the `proxy_pass` setting and set the port number to `8055`.

![Set proxy pass port number](/images/directus/proxy-pass.png)

<base-info>
Note that the port number for the app when you look at the site details will continue to display as the port number Cleavr automatically assigned. This will not impact deploying Directus.
</base-info>

Click **Update**.

## Add a database

On the same server you added the site, click on the database section to install a new MySQL (or optionally Postgres) database.

Once the database server is installed, add a new database. Remember the database name and database user credentials.

![Add database](/images/directus/database.png)

## Setup the web app

In the web app section, select **Complete Setup** for the web app that was created for the site created earlier.

### Enter repository

On the **Code Repository** tab, enter the following:

**Version Control Provider**: GitHub

**Repository**: direcvit/directus

**Branch**: main

![Add repo](/images/directus/repo.png)

Click **Update**.

<base-info>
You will need a GitHub VC provider account created for this step. Select your repository you that you setup earlier.
</base-info>

### Set up NPM Build

Click on the NPM Build tab and fill in the following:

Entry Porint: npm

Arguments: start

Build Command: npm run build

![Add repo](/images/directus/entry.png)

Click **Update**.

### Add env variables

Click on the Environments section and add in the following environment variables:

```
PORT=8055
PUBLIC_URL=/

DB_CLIENT=mysql
DB_HOST=127.0.01
DB_PORT=3306
DB_DATABASE=directus
DB_USER=dbuser
DB_PASSWORD=pswd1234

RATE_LIMITER_ENABLED=true
RATE_LIMITER_STORE=memory
RATE_LIMITER_POINTS=50
RATE_LIMITER_DURATION=1

CACHE_ENABLED=false

STORAGE_LOCATIONS=local
STORAGE_LOCAL_DRIVER=local
STORAGE_LOCAL_ROOT=./uploads

KEY=xxxxxxx-xxxxxx-xxxxxxxx-xxxxxxxxxx
SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ACCESS_TOKEN_TTL=15m
REFRESH_TOKEN_TTL=7d
REFRESH_TOKEN_COOKIE_SECURE=false
REFRESH_TOKEN_COOKIE_SAME_SITE=lax

EXTENSIONS_PATH=./extensions

EMAIL_FROM=no-reply@directus.io
EMAIL_TRANSPORT=sendmail
EMAIL_SENDMAIL_NEW_LINE=unix
EMAIL_SENDMAIL_PATH=/usr/sbin/sendmail
```

![Env Variables](/images/directus/env-variables.png)

Replace the environment variables with the appropriate information for your database that you setup earlier as well as the random key and secret.

See [Directus Environment Variables](https://docs.directus.io/reference/environment-variables/) for all available variables.

Click on **Sync**.

## Deploy!

Once you have everything configured, deploy! 🚀

After deployment, check the `Build Assets` logs. You will get the initial email and password to login to your Directus app.

![Initial Directus Admin Details](/images/directus/initial-directus-admin.png)

Use the email and password to login to your Directus App. You can change the credentials later.

![Directus Admin Login](/images/directus/directus-admin-login.png)

![Directus Collections](/images/directus/directus-collections.png)
