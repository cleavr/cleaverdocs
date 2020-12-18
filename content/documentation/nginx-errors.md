---
title: 'NGINX Errors'
description: 'Common NGINX Issues.'
image: 'https://docs.cleavr.io/images/newsite.png'
video: ''
---

Code **bmdpbnhyZWxvYWQ**

This is an nginx error code. 

## What went wrong? 
This error code is due to nginx not functioning correctly. In the services section of the impacted server, click the 
refresh button to restart the service and then attempt to create a site again. 

Often times, NGINX just needs a good-ol-fashion power cycle. 

## Long Domain Names
If you entered a very long domain name, such as more than 32 characters, then you will exceed naming limits placed by NGINX. 
If this is the case, you will need to resolve the NGINX error by following the below instructions as this will cause NGINX to 
fail on your server if you take no action, even if you delete the site that causes the issue. 

To confirm if this is the case, follow these steps: 

1. SSH into your server 
2. Check NGINX logs: `sudo cat /var/log/nginx/error.log`
3. See if the following error is present: `could not build server_names_hash, you should increase server_names_hash_bucket_size: 64`

If you see the above error, then you will need to increase the hash bucket size.

Cleaver sets server_names_hash_bucket_size to 64 by default; which is enough to satisfy the majority of use cases. 
However, if you need to increase the size, you can increase to 128 with the following steps: 

1. In Cleavr, navigate to the impacted server and select **Services** tab
2. Click the wrench icon for the NGINX service
4. In the text area, enter the following: `server_names_hash_bucket_size 128;`
5. Click the **Update** button
6. In the Services section, select option to **refresh NGINX**

This will increase the size limit. Now, you can delete the site that had the error if you have not already, and then add the site again.
