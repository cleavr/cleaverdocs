---
title: 'Server Users'
description: 'Set up and manage server users for your servers.'
---

Server (or, webapp) users help with enabling site isolation for your servers. 

## Why site isolation? 

Site isolation helps you increase the security of your server as a whole by limiting what access users and sites have on 
your server. Site isolation is often used by hosting companies where multiple client information is housed on a server or 
organizations where multiple services are installed on one server.

To keep sites isolated, a server user is created first, then a site is associated to a single server user. The user will 
only have access to sites associated to them. They will not be able to view site folders for other users. 

<base-info>
Server users will see other top-level folders for sites associated to other users; however, will not have access to drill into them.
They will also be able to view root directory info in read-only. 
</base-info>

This also helps with limiting access for plugins that clients may install on their server. Oftentimes, plugins aren't 
overly secure and can often do more harm than good. 

## Add a new user
Under the server you want to add a user to, click on the **Users** tab. Then, add the username and password you want to 
assign and then click **Add**. 

<base-info>
You can make a user a sudo user. Do this with caution as this gives the user role more access than you may intend. 
</base-info>

To edit a user's password or remove a user, select the user in the table and then make the appropriate updates. 

<base-alert>
If you choose to delete a user, please note that this action will also remove any sites associated to the user. 
</base-alert>

## Apply a site to a user
You only have the option to apply a site to a server user when you are creating a new site. You cannot edit / change users 
for a site after the site has been created. 

During site creating, select the Web App User dropdown to apply the site to a user. 
