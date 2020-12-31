---
title: 'Access database via SSH'
description: 'How to access your database via SSH.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

To remote into the server, you will first need to add your [SSH key](/ssh-keys) and then SSH into the server using a command like:

```
ssh cleavr@<server ip address> 
```

The cleavr user is added to the server during provisioning. Please keep in mind, the cleavr user does not have full root 
level access for security reasons. This also includes not giving cleavr user direct access to databases. 

If you are running MySQL or MariaDB databases, use the following command to start a mysql session using the username and 
password you setup your database with. 

```
mysql -u <username> -p 
```

You can now use mysql command line to work with your database. 
