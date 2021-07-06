---
title: 'Queue Workers'
description: 'Set up and manage queue workers for your Laravel web applications.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What is a queue worker?
Queues help to defer the processing of time-consuming tasks, such as sending emails. 

Cleavr offers a Queue Workers interface for Laravel web applications located in the web app section. 

Here, you can quickly create and manage queue workers as well as check the status, view logs, stop, and restart the queue worker. 

## Adding a new queue worker
To add a new queue worker, go to the web app you want to add the worker to, select **Queue Workers**, and select the **Add New Queue Worker** button.

<base-alert>
Queue workers are only available for Laravel applications. See Process Monitors for other apps types. 
</base-alert>

Add a **connection**, **queue**, and configure any desired advanced options. 

Click **Start Queue Worker** to create the worker. 

Click on the ellipsis for queue workers to check current status, view logs, stop, and restart the queue worker. 
