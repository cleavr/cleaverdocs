---
title: 'Access database via a client tool'
description: 'How to access your database using a client tool.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

You can use a database client to access your database. We recommend **TablePlus** as it is compatible with all database types 
and versions Cleavr offers.

- **Host**: 127.0.0.1 (you may also need to enter a port number based on the db type)
- **User**: db username
- **Password**: db password
- **Server**: server ip address
- **User**: cleavr 
- Use SSH key and point to private key on your machine - make sure you add your public key to Cleavr first

<base-alert>
When installing databases, Cleavr locks down root access to external client tools. This is for security. To access using a client tool, 
make sure you have added a database user and password and use those credentials for external clients. Also, during provisioning, 
Cleavr creates a 'cleavr' user on the server which is not granted database access. This is also for security reasons. 
</base-alert>
