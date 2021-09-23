---
title: 'SSH Access Denied'
description: 'Cleavr uses Gravatar for avatars.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

Sometimes, Cleavr may be denied SSH access to your server to run necessary commands. Often, this occurs with custom 
servers where a firewall setting may be denying SSH access to Cleavr. Check your servers firewall settings and ensure 
Cleavr can access your server via SSH. 

A similar symptom may also be your server is running out of disk space. If operations in Cleavr, such as adding a new site, 
viewing a server pulse, or deployments are failing - it could be due to low server disk space. 

If you have Server Monitoring enabled, check the disk space charts to check disk space levels. 

Otherwise, typically when you SSH into your server as a root user, then you'll see a report that include current disk space. 
