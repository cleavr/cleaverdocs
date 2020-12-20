---
title: 'Services'
description: 'Manage services for your servers.'
image: 'https://docs.cleavr.io/images/newsite.png'
video: ''
---

The services section displays the services that have been installed on the server. 

If you forget to add a database or environment while provisioning a server, you can go to this section and install 
additional services to your server. 

You may also choose to stop or remove some services installed during provisioning if they are not applicable for your needs. 

## Add services
If you need to install a service for your website or application, you can add the additional service here. 

## Services Pulse 
You can check the status and recent stats for your services by clicking on the pulse icon. This comes in handy if you want to check 
if the service is running properly or not. 

### NGINX 
The NGINX pulse will display recent NGINX test and log reports if NGINX is stopped or is failing. This is a great way to troubleshoot issues. 

<base-info>
NGINX is literally the server engine and is the key component for your server correctly running and serving your apps. If you
suspect an issue with your server, first go to the services section and: 
    <ul>
        <li>
            Check the NGINX pulse
        </li>
        <li>
            Resolve any issues if NGINX is down by referring to the pulse report
        </li>
        <li>
            Try stop/start or refresh NGINX (as they say, turning it off and on again seems to fix 90% of the issues)
        </li>
    </ul>
</base-info>

## Stop/Start/Refresh/Remove services
Sometimes, you may need to stop a service for various reasons and then start it back up again. Cleavr's services tab makes it convenient to stop and start services. Click the stop button to stop and the play button to resume a service. 

If a refresh of a service is needed, simply select the refresh icon to refresh the service. 

Some optional services also allow you to remove them. 

<base-alert>
Be careful when removing a service as your apps may be utilizing the service and may not function properly without it.
</base-alert>
 

## Configure services
Some services allow you to configure settings, such as **PHP** and **NGINX**. To edit, click on the wrench icon. 
This section is often used for PHP as PHP's default settings are set low and may block certain things - such as uploading 
files sizes larger than 2 mb. 

## Repair Serverf

If you're running into issues with your server, you can try the **Repair Server** option which will
run through checks and update settings, such as file permission settings, to make sure Cleavr has
appropriate permissions to perform basic operations on your server. 
