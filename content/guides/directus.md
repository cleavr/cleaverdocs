---
title: "Deploy Directus"
description: "How to deploy Directus to your server."
image: "https://docs.cleavr.io/images/directus/directus.png"
video: ""
canonical: https://cleavr.io/cleavr-slice/how-to-deploy-directus
---

<you-tube video="FJ5HNqHScgw"></you-tube>

[Directus](https://directus.io/) is an open source app that wraps your new, or existing, SQL database with a realtime GraphQL+REST API for developers and an intuitive admin app for non-technical users. It supports PostgreSQL, MySQL, SQLite, Microsoft SQL Server, OracleDB, MariaDB, AWS Aurora and more.

Directus mirrors your custom database, with your schema and content stored pure and unaltered. When it comes time to ingest, fetch, or update your data, you can use its REST+GraphQL API, JavaScript SDK, or even pure SQL. Directus gives you plenty of access options to choose from.

Using Cleavr to setup your Directus app is easy and it works in essentially a two-step progression:

1. 1-click install - when adding a new Directus site, you're essentially performing a 1-click install to add and configure Directus
2. Deploy your custom Directus project - already have a Directus app you're working on locally? No problem! The 1-click install also created a deployment workflow that you can connect to your code repo and then deploy out your project using your code

## Step 1: Add New Directus Site (1-click install)

On a new server in your [cleavr.io account](https://cleavr.io), add a new site and select **Directus** as the app type.

Expand **Advanced Options** and enable the option to **Setup Database**. Select MySQL for your database server type. You can also configure the default admin username and password.

![Add database](https://docs.cleavr.io/images/directus/database.png)

## Step 2: Connect code repository

In the deployment workflow section, select **Complete Setup** for the deployment workflow that was created for the site.

On the **Code Repository** tab, enter the following:

**Version Control Provider**: GitHub

**Repository**: `cleavr/directus-example`

**Branch**: `master`

Click **Update**.

<base-info>
Make sure to use a GitHub account for this example. This is a public repository that you retrieve from and deploy on your own server. 
</base-info>

## Step 3: Deploy!

Once you have everything configured, deploy! 🚀

After deployment, check the `Build Assets` logs. You will get the initial email and password to login to your Directus app.

![Initial Directus Admin Details](https://docs.cleavr.io/images/directus/initial-directus-admin.png)

Use the email and password to login to your Directus App. You can change the credentials later.

![Directus Admin Login](https://docs.cleavr.io/images/directus/directus-admin-login.png)

![Directus Collections](https://docs.cleavr.io/images/directus/directus-collections.png)
