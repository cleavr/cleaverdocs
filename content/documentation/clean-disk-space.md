---
title: 'Clean Disk Space'
description: 'Clean up disk space when your server is running low on space.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: 
---

Clean your server's disk space when space is running low. This action will clean up old files that pile up over time and take up space on your disk. 

## Run Disk Clean Space
To run disk clean up, from the Dahboard or Servers page, click on the ellipsis icon for the server you want to clear space on and then click the **Clean Disk Space** option on the menu. 

![server menu clean disk space option](/images/clean-disk/menu-clean-disk.png)

A modal will display where you can select which cleanup options you want to run. You can learn more about the options in the sections below. 

### Clean cache

This operation runs `apt-get clean` which clears downloaded package files. This removes everything except the partials folder and lock file from the `/var/cache/apt/archives` directory. 

### Clear compressed log files

This operation clears compressed archived files, `*.gz`, from the `/var/log` directory. 

### Clean systemd journal logs

This operation clears systemd journal entries that are older than 3 days.

### Clean MySQL bin logs

This operation clears the MySQL bin logs, which are logs that contain event information, such as table changes. [Click here to learn more about MySQL bin logs](https://dev.mysql.com/doc/refman/8.0/en/binary-log.html).

<base-info>
    MySQL bin logs can populate pretty quickly when you are first spinning up an app and working with  database tables. 
</base-info>

## Schedule Clean Disk Space Job

Set a scheduled disk clean up job to automatically run on a set schedule. Enable the cleanup options you want to schedule and then configure what interval you want the job to run on. 

If you reschedule a job, this will overwrite any existing scheduled jobs. 

To remove a scheduled job so that it no longer runs, click **Remove** to delete the job. 
