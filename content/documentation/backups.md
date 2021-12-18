---
title: 'Backups'
description: 'Set up and manage automated backups for your servers.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

Database and Filesystem backups are encouraged so that you can quickly get your apps back up-and-running in case of 
disasters. 

## Schedule a new backup
To schedule a backup, you must first have a Backup Provider created. 

1. Select the backup profile to use 
2. Add a label to refer to the backup as
3. Set a frequency - this uses the standard cron job schema with times set to the server time; [learn about cron schedule formatting](https://crontab.guru/)
4. Select Filesystem or Database depending on which you are scheduling 
5. If selecting Filesystem - enter the source path
6. If selecting Database - select the database you are backing up

<base-point>
Pro tip! Space out backup run times if configuring multiple backups. If you set them to all of the same time, then they  may interfere with each other. 
</base-point>

### Other Options
- Destination folder is where backups will be placed (make sure the username you use has write access to the destination folder path you supply)
- Define folders and files to ignore (for Filesystem backups)
- Notifications - if you created a Notifications profile, you will have options to be notified when backups fail and/or successfully occur


## Backup controls
If you have a backup scheduled, from the list view you can also: 

- Select plus button to trigger one-off backup
- Select pause button to pause backup schedule; or select play to resume
- Select trashcan button to delete backup schedule

## Clear old local backups periodically
Sometimes your server's disk space may be full because of the large old backup files. But you can set up a cron job that runs periodically inorder to clear old files.

Go to Server < Cron Jobs and click Add New Cron Job and add the following command:

`find pathToBackupFiles *.tar.gz -mtime +days -type f -delete`

_pathToBackupFiles_: it's the location where your backup files are located

_days_: files older than the specified days are removed. 

To clear files older than 30 days you need to specify 29 days since -mtime counts 24 hours period.

