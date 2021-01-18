---
title: 'Deploy a Statamic CMS App'
description: 'Deploy a Statamic CMS app with Cleavr.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

[Statamic](https://statamic.com/) is a pretty cool Laravel-based CMS for creating creative-looking sites.

In this guide, we’ll work through the first section of Statamic’s [quick start guide](https://statamic.dev/quick-start).

## Install Statamic on local

Referring to the quick start guide, we’ll install the example app using Composer in our `~/Sites` folder.

Installing Stamatic will almost certainly fail due to a memory allocation error. If you haven’t already increased your 
PHP memory limit, then you’ll want to do that. The following is a great guide on how you can adjust the memory_limit setting: 
[https://www.chapterthree.com/blog/how-fix-composer-memory-issue](https://www.chapterthree.com/blog/how-fix-composer-memory-issue).

Once successfully installed, you should be able to preview on your local via [http://cyberspace-place.test](http://cyberspace-place.test/). 
If you don’t have Valet installed and running, no worries. We’ll mainly be pushing this to prod and then will work more from there.

Add your project to GitHub / Bitbucket / GitLab.

## Deploy with Cleavr
Let's deploy using **Flash Deploy**.

![Statmic CMS flash deployment](/images/statamic/flash.png)

When setting up the app type, be sure to select **Laravel** and, define the repository your project is at, and install a **MySQL** database server. 

Flash deploy, in fell-swoop, will -
- Provision a new server
- Install app dependencies
- Create new site
- Deploy the site

Once completed, you should see the following - 

![Statmic CMS flash deployment complete landing page](/images/statamic/landing.png)

## Add a user
Once you deploy the site, cick on the URL and you'll see the login screen. In order to log in, you'll need to add a user.

You'll need to SSH into the server and add a new user to login with.

### In Cleavr > Server > SSH
Add your SSH key, make sure to apply to root user. Once added, copy your server’s public IP address, and then SSH into the server via your terminal.

```
ssh root@<public ip>
```

Once in your server, head over to

```
cd /home/<site name>/current
```

Next, run the commands to create a new super user per the Quick Start commands.

```
php please make:user
```

![Statmic CMS terminal create new user](/images/statamic/terminal.png)

Now, head back to the Statamic dashboard and log in.

<base-alert>
If you get a 500 error after attempting to login; it’s likely a cache issue. You can clear the cache by modifying the webapp > env and enabling clear cache option. Or, just redeploy. The deployment is pretty quick.
</base-alert>

![Statmic CMS admin screen](/images/statamic/admin.png)

🎉 That’s it! Pretty easy. 

<base-alert>
Some users with older Statamic versions experienced circular issues during deployment on the install composer step. 
If you have this issue, SSH into your machine and install version 1 by executing: <b>composer self-update --1</b>
</base-alert>

## GitHub Integration

If you integrate with GitHub and have **push-to-deploy** enabled, you may want to check to see what the new commit is
before deploying to production as the new commit may already be in production. 

To watch for these instances, you can create a new deployment hook to check the commit message for the presence of `[BOT]` 
and stop the deployment process when present. 

In the `web app > deployment hooks` section, add a new deployment hook and add im the following script: 

```bash
if [[ "{{ commitMessage }}" =~ "[BOT]" ]]; then
    echo 'AUTO-COMMITTED ON PRODUCTION. NOTHING TO DEPLOY.'
    exit 1
fi
```

Place the new hook after the `Copy Project` deployment step. 
