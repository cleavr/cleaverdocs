---
title: 'Site Stating'
description: 'Stage your sites before making them live.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

Site stating allows you to configure a site and then copy it to a production site when you are ready.

## Staging Setup

To stage a site, you'll need two sites of the same site type (ie. both WordPress sites or both NodeJS sites) setup on a server. 

### Currently Staging For

For the site you want to use as the staging area, navigate to the site and select **Staging** from the navigation. 

Select the site that this site will be staging for. The site you select is the production site where the files from the staging site will be copied to when you select **Sync**. 

### Files and Folders to Exclude

When you sync staging with production, you'll likely want to list files to exclude in the synchronization process. 

For example, if you are staging for a WordPress site, then you'll likely want to exclude `wp-config.php` as this file contains database connection information
and you'll most likely want to use separate databases for staging and production environments. 

Comma separate the patterns for exclusion. 

### Post Sync Script

If you have any scripts that may need to run after production is synchronized with staging, then include it here. 
