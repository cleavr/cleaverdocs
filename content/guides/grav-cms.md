---
title: "Grav CMS"
description: "Install Grav CMS with Cleavr."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

[Grav](https://getgrav.org/) is an open source, flat file CMS that is a breeze to use. You'll love it!

Cleaver Desktop had a 1-click installer. We plan on bringing this to [cleavr.io](https://cleavr.io). In the meantime, even without
the ease of a 1-click installer, Grav is super duper easy to install on your server using Cleavr.

## Deploy Grav with Cleavr

There are a couple of different ways to add Grav to your server as you can see from their [installation instructions](https://learn.getgrav.org/16/basics/installation).

In this guide, we'll use a direct method that avoids you having to SSH into the server.

### In Cleavr -

1. On your server, add a new **PHP** site
2. Once the site is added, go to **Deployments** and click on the deployment workflow that was automatically created after step 1
3. In `deployment workflow > settings`, select a GitHub VC Profile
4. For repository, enter `https://github.com/getgrav/grav` then save the settings and refresh the page
5. Go to `deployment workflow > deployment hooks` and continue with the next steps

We'll add a couple deployment hooks. One to install grav and the other to install the admin panel, which is optional.

Add a new hook for **Install Grav** with the following command -

```
cd {{ releasePath }}
bin/grav install
```

**Save** the hook and optionally add the following hook for **Install Admin Panel** -

```
cd {{ releasePath }}
bin/gpm install admin --all-yes
```

Drag and drop the new hooks so that the hooks appear in the following order:

1. Copy Project
2. Install Grav
3. Install Admin Panel
4. Activate New Deployment
5. Clean Old Deployments.

<base-info>
You'll see some other disabled deployment hooks which you can leave as is. They don't need to run during deployment. 
</base-info>

Now, go to `deployment workflow > deployments` and click on **Deploy**.

Once the deployment is complete (which is super quick and shouldn't take more than a minute or two) head over to the URL that
was setup for your site.

If you opted to install the Admin Panel, then you'll fill out a quick form and then you'll be all set!
