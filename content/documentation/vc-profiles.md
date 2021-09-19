---
title: 'VC Profiles'
description: 'Add VC profiles to connect version control accounts.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: 
---

These are your git repository accounts; such as, GitHub, GitLab, and Bitbucket. Cleavr connects to your VC profile to 
pull the code so that Cleavr can build and deploy your app. 🚀

## VC Providers

### [GitHub](https://github.com/)

One of the best known Git management providers, GitHub has great options for solo accounts and team accounts. 
They do have a [20 web hook limit](https://developer.github.com/webhooks/) per repository; though, you will likely never need that many web hooks associated 
with any one repository.

For NodeJS based apps, including AdonisJS and NuxtJS, Cleavr also offers an itegration with GitHub Actions so that you can
use their services to build your apps. Best yet, all you have to do is click a button to enable and Cleavr gets all the basics 
done for you, no extra configuration required. 

<base-info>
When granting access to Cleavr, make sure to pay attention to the auth screen as it will ask which organization access you want to grant to Cleavr. You can also update
access priveleges in GitHub, under your account settings > applications > authorized OAuth apps, locate Cleavr and then manage access.
</base-info>

### [GitLab](https://gitlab.com/)

GitLab is another great git repository provider and is perfect for teams and solo devs.

### [Bitbucket](https://bitbucket.org/)

Bitbucket is a product of Atlassian and as such, integrates well with their other line of products such as JIRA.
