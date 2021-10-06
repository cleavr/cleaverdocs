---
title: 'Expose Supervisor'
description: 'How to add a domain to supervisor internal UI.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: 
---

Cleavr installs Supervisor automatically for servers hosting PHP and Laravel sites. 

You may use the [Generic Port App site type](/guides/expose-local-sites) to expose the local interface for Supervisor. 

Follow the instructions to create the [Generic Port App](/guides/expose-local-sites) and set the port number to **9001**. 

![Supervisor generic port app](/images/app/generic-port-app.png)

There is one additional step you'll need to perform to expose the Supervisor UI. 

SSH into your server, and edit the following file: 

```
/etc/supervisor/supervisord.conf
```

Append the following to the bottom of the file: 

```
[inet_http_server]
port=127.0.0.1:9001
username=admin
password=password 
```

Save the file, restart supervisor, and then access the domain you set up the Generic Port App with. 

![Supervisor UI in port 9001](/images/app/expose-supervisor.png)
