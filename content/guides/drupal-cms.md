---
title: 'How to deploy Drupal CMS'
description: 'How to deploy Drupal CMS with Cleavr.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## Step 1: Prep Cleavr
1. Provision a new server
2. Click add site, select PHP site, add public to web directory, and then click to add site
3. In Server > Database, install MySQL 8
4. Once MySQL is installed, add a new database (such as name: drupal, username: admin, password: your password)
5. Add your SSH key to the server, apply `cleavr` user

## Step 2: Download Drupal
Install the zip file for the version you’d like. Here is a link to install the current version - https://www.drupal.org/download

Once drupal file is downloaded, add it to the following directory on your server:

```
/home/cleavr/<site name>/current
```

<base-info>
You can use an <a href="/guides/ftp-server">SFTP client</a> to move the zipped file.
</base-info>

## Step 3: Server Install Steps

1. SSH into your server as cleavr
2. Go to `/home/cleavr/<your site>/current` directory
3. Remove the current public folder with `rmdir public` command as we’ll rename the unzipped drupal folder to public
4. Unzip the zipped folder using `unzip <drupal file name>.zip` command
5. Once unzipped, rename the unzipped folder: `mv <drupal folder name> public`
6. Navigate to the following folder: `cd /sites/default`
7. Create a new folder: `mkdir files`
8. Now, change permissions: `chmod a+w files`
9. Next, there is a default settings file that we’ll copy and rename: `cp default.settings.php settings.php`
10. Change permissions for settings.php: `chmod a+w settings.php`

## Step 4: Complete Setup On Drupal’s Web Interface
The server should all be good to go. Now, open a browser and navigate to the domain that was created for your site in Cleavr.

Go through the setup prompts. When asked, enter the database name, username, and password that you created for your MySQL 
server during the Cleavr setup portion.
