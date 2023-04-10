---
title: "Deploy Umami Analytics"
description: "How to deploy Umami web analytics to your server."
image: "https://docs.cleavr.io/images/umami/umami.png"
video: ""
---

[Umami](https://umami.is/) is a simple website analytics platform that you can install on your server and take control of usage data across your web
properties.

Umami uses the Next.js framework and is easy to deploy to your server using Cleavr without deviating much from their instructions on their
[readme file on GitHub](https://github.com/mikecao/umami).

## Step 1: Add New SSR App

On a new server, add a new site, selecting **Node JS SSR** as the app type.

Once the site has been successfully added, go to the site's settings and click the **NGINX Config** tab.

Since Umami is configured to run on port 3000, we'll need to update the `proxy_pass` setting to reflect that.

Find the `proxy_pass` setting and set the port number to `3000`.

![Set proxy pass port number](/images/umami/proxy-pass.png)

<base-info>
Note that the port number for the app when you look at the site details will continue to display as the port number Cleavr
automatically assigned. This won't impact deploying Umami. 
</base-info>

Click **Update**

## Step 2: Add A database

On the same server you added the site, click on the database section to install a new MySQL (or optionally Postgres) database.

Once the database server is installed, add a new database. Remember the database name and database user credentials.

## Step 3: Configure Deployment Workflow

In the deployment workflow section, select **Complete Setup** for the deployment workflow that was created for the site created earlier.

### Enter repository

On the **Code Repository** tab, enter the following:

**Version Control Provider:** GitHub

**Repository:** mikecao/umami

**Branch:** master

Click **Update**.

<base-info>
You will need a GitHub VC provider account created for this step.
</base-info>

### Add env variables

Click on the **Environments** section and add in the following environment variables:

```
DATABASE_URL=mysql://<db username>:<db password>@localhost:3306/<db name>
HASH_SALT=<some random string of characters>
```

Replace the `<>` pieces above with the appropriate information for your database that you setup earlier as well as a random
hash salt.

![Add repo](/images/umami/env-variables.png)

Click on **Sync**.

### Create deployment hook

We'll also need to have a command ran to migrate the database tables. We'll use a deployment hook to achieve this.

Select **Hooks** and add a new hook.

**Hook Name:** migrate database

**Hook:**

```
cd {{ releasePath }}
mysql -u<db username> -p<db password> <dab name> < sql/schema.mysql.sql
```

Replace the `<>` accordingly with the database info. Take note that there is no space between `-p` and your password.

Click **Update**.

<base-info>
You can optionally choose to run the command via SSH if you wish. 
</base-info>

Place the migrate database hook directly following the build assets hook.

## Step 4: Deploy!

Once you have everything configured, deploy! 🚀

Select the URL for the site, and then enter the default user credentials:

**Username:** admin
**Password:** umami

![Admin page](/images/umami/admin-page.png)
