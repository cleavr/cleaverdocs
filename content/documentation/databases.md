---
title: 'Databases'
description: 'Set up and manage databases for your servers.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---


## What is a database?
A database can be configured on your servers. Databases hold structured data for your websites and apps and can either be 
installed on the same server as your website / app or on its own dedicated server.

## What types of databases can I add?
The following types of databases can be added to your provisioned servers.

## [MySQL](https://www.mysql.com/)
One of the best known relational databases, MySQL is an open-source product by Oracle. You can choose between MySQL 5.7 and MySQL 8.0.

## [PostgreSQL](https://www.postgresql.org/)
An open-source object-relational databases, PostgreSQL is built for speed and for data analytics. 

## [MariaDB](https://mariadb.org/)
A fork of MySQL, MariaDB is another popular relational database.

## Install a database 
During the steps to provision a new server, you have the option to install one of the database types. This will install the database system onto your server and you can then add databases after provisioning is complete.

<base-point>
You can also provision a server that is meant solely to be a databases server by selecting the Database Server server type when adding a new server. 
</base-point>

## Add a new database
In Servers > your selected server > Database, 

## Manage databases and users
To add a new database user, select **Add New Database User**. Once you add the new user, you can edit the user to manage which databases the user has privileges to. 

Select the ellipsis icon for databases and database users to remove the selected resource. 

## Postgres Plugins and Admin Role

Click on the elipsis icon for a postgres database to add a PostgreSQL extension. For example, you can add the popular `uuid-ossp` extension. 

In some cases, you may need to make a postgres databases user a superuser. To do so, click on the elipsis for the postgres user and then select the **Make Superuser** option. 

<base-alert>
It's not recommended that you keep a user as a superuser. When you are done with the task where a superuser is required, we recommend that you then demote the user. 
</base-alert>

<base-alert>
Some extensions like ** postgis ** requires their supporting files to be installed before installing the extension.

If the installation fails, SSH into the server and install the extension's
supporting files, and try re-installing the extension.
</base-alert>

To install `postgis` extension's supporting files you can SSH into the server and run 
`sudo apt install postgis postgresql-{postgresVersion}-postgis-{postgisVersion}`.

The command to install extension's supporting files may differ between extensions. Please consult the documentation 
site for your desired extension.

## Open database hosts to outside servers
When creating a new PostgreSQL database, enter the IP for the outside server that will access the database. 

## Database Monitoring
If you have server monitoring enabled for your server, then you can also select the option to enable database monitoring from the database section. 
This will show database monitoring reports in this section. 

## Clone Database Server

You can select **Clone Database Server** to clone the database server and related databases and database users on a server and then clone them to another server. 

Note, the target server must not be running a conflicting database server type. Such as, if the current server is running MySQL 5.7 and the target server is running MySQL 8.0, then the cloning
process will not work. 

## What database should I use for WordPress?
MySQL 5.7, MySQL 8.0, and MariaDB 10.4 will work with your WordPress site.

## Database Troubleshooting

### MySQL / MariaDB SUPER privelege and binary logging error

Have you ran into the following error?

```
ERROR 1419 (HY000): You do not have the SUPER privilege and
binary logging is enabled (you *might* want to use the less safe
log_bin_trust_function_creators variable)
```

To move past this error, you'd have to either assign super priveleges to the user, which should be done with caution, or, more preferebly, run the following command in mysql terminal: 

```
mysql -u USERNAME -p
set global log_bin_trust_function_creators=1;
```

Replace `USERNAME` with the MySQL user you want to modify. You can then set to `0` after you've made the necessary modifications to your database. 
