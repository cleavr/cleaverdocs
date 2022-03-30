---
title: 'High CPU Usage'
description: 'How to troubleshoot high CPU on your server.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: 
canonical: 
---

If you have monitoring enabled, you may notice high CPU utilization. High CPU utilization can be due to a number of factors. 

Active deployments, high visitor activity, and memory leak issues associated with your app or framework are just a few examples. 

Outside of provisioning, adding a site, and deploying a web app, there is not much that Cleavr does that would contribute to high CPU utilization rates. 

If CPU utilization is constantly high and you want to investigate further, here are some troubleshooting tips to start with: 

1. Force restart the app. Your apps may be getting hung up something and a restart may flush out the issue. 
2. Check build settings and ensure you are running the correct commands for your web apps. 
3. Check disk space. If the disk space is low, try freeing up some space using Cleavr's [Clean Disk Space tool](/clean-disk-space).
4. Check the NGINX logs in server > logs > NGINX error logs.
5. If your app depends on a static uploads folder, make sure the folder exists.
6. Disable plugins to see if any are taking up too much CPU. This is especially applicable if you are using WordPress plugins. 
7. Check PM2 status. This is applicable to NodeJS applications, PM2 logs are in server > logs > PM2. Check to see if there are too many restart attempts, this is an indication that you may have a duplicate process that is trying to start but cannot due to a "port in use" issue. 
8. If you are using a framework, check their docs and forums to see if there are any known memory leak issues. 