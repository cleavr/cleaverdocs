---
title: 'Backups'
description: 'Set up and manage automated backups for your servers.'
image: 'https://docs.cleavr.io/images/newsite.png'
video: ''
---

Database and Filesystem backups are encouraged so that you can quickly get your apps back up-and-running in case of 
disasters. 

## Schedule a new backup
To schedule a backup, you must first have a Backup Provider created. 

1. Select the backup profile to use 
2. Add a label to refer to the backup as
3. Set a frequency - this uses the standard cron job schema with times set to the server time
4. Select Filesystem or Database depending on which you are scheduling 
5. If selecting Filesystem - enter the source path
6. If selecting Database - select the database you are backing up

### Other Options
- Destination folder is where backups will be placed (make sure the username you use has write access to the destination folder path you supply)
- Define folders and files to ignore (for Filesystem backups)
- Notifications - if you created a Notifications profile, you will have options to be notified when backups fail and/or successfully occur


## Backup controls
If you have a backup scheduled, from the list view you can also: 

- Select plus button to trigger one-off backup
- Select pause button to pause backup schedule; or select play to resume
- Select trashcan button to delete backup schedule
