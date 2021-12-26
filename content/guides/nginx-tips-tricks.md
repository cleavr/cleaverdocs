---
title: 'NGINX Tips and Tricks'
description: 'NGINX tips and tricks for your server and sites.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## Order 
As a general tip, NGINX operates from top/down and may end once the first lookup that matches is found. 

If you add a new directive and it is not working as intended, then try placing somewhere else in the order. 

## IP filter IPs

You can IP filter directories with NGINX using `allow` and/or `deny`. 

For example, if you'd like to allow access to a subdirectory named `/mydirectory` to specific requesting IP addresses, you 
can add the filter like in the following example. 

```
location ~* /mydirectory {
    allow 1.2.3.4;
    deny all; 
}
```

The above will allow access to only a requester with IP address equal to `1.2.3.4` and will deny access to the directory
for all other IPs. 

## NGINX Config for WSS (Web Socket) to work

```
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "Upgrade";
```
