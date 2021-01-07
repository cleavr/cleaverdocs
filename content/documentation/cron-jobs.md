---
title: 'Cron Jobs'
description: 'Set up and manage cron jobs for your servers.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What is a cron job?
Cron job is a scheduling utility that lets you set a recurring command, or script, to be performed at specified times and intervals. 
They are very handy for handling mundane, recurring tasks. For example, you probably don’t want to hold onto every log or 
file that gets stored in a folder as they will eventually take up storage space and may not be necessary to retain. For this, 
you can set up a cron job to remove files that are older than 3 months, as an example.

 

## Adding a new cron job
For a specified server, select **Cron Jobs**. Add a name to refer to the job as, a command, enter the user you want to perform the action 
(typically cleavr, root, or another user you configured), select the frequency, and then 
select **Schedule** to add the cron job.

<base-alert>
Be very careful using root user as this may produce unintended consequences. 
</base-alert>

The frequency section uses cron job formatting but includes hint text beneath it that lets you know how the job will be 
scheduled in clear words. See the following wikipedia article on how you can work with the scheduling format if you are unfamiliar with it. 
[https://en.wikipedia.org/wiki/Cron](https://en.wikipedia.org/wiki/Cron) 

## Example Cron Jobs

### Laravel Schedule

`/usr/bin/php /home/<server user>/<site name>/current/artisan schedule:run > /dev/null 2>&1`

Where `/usr/bin/php` is the path to where PHP is installed. Run `which php` command on your server to find exact path. 

And, replace `/<server user>/<site name>` with the correct server user, `cleavr` by default, and site name that make up the path
for where your app is located. 
