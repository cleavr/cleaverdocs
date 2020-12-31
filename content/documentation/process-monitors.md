---
title: 'Process Monitors'
description: 'Set up and manage process monitors for your servers.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What is a process monitor?
A process monitor is just that, a monitor that watches processes that are running on your servers. An example of a process 
is an email queue that you have running on a server which manages sending emails; such as, registration, password resets, 
and other transactional emails related to your app. A process monitor will assist in keeping the email queue alive, such as 
restarting the service if the server is restarted or if the server stops for other reasons.

## Adding a new process monitor
To add a new process monitor, go to the server you want to add the monitor to, select **Monitors**, and select the **Add Monitor** button.

Add a **name** to refer to the monitor as, a **command**, and the **user** to run the command as (typically, cleavr or root).

<base-alert>
Be very careful using root user as this may produce unintended consequences. 
</base-alert>

Optionally, you can configure advanced options such as the directory where the command will run, any applicable environment variables, 
the number of attempts a monitor should make to run the command, whether or not to start the monitor on system boot, and 
whether or not to attempt to restart the process if it stops unexpectedly.  
