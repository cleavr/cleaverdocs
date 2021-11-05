---
title: 'Plausible Analytics'
description: 'How to get Plausible Analytics running on your server in a few minutes.'
image: 'https://docs.cleavr.io/images/plausible/plausible.png'
video: 'https://youtu.be/0U8FPHkYmV8'
---

<you-tube video="0U8FPHkYmV8"></you-tube>

[Plausible Analytics](https://plausible.io) is a great alternative to Google Analyics. Hosting plausible on your own [Cleavr](https://cleavr.io) managed server gives you 
even more control over the usage data that you collect. 

Plausible can be installed on your server in just a few minutes. 

[Here are the Plausible self-hosting instructions if you need to refer to them.](https://plausible.io/docs/self-hosting)

## Prerequisite

Have a server provisioned and ready-to-go in Cleavr. 

##  Step 1: Install Docker Service

In the **Services** section on the server you are installing Plausible on, install the **Docker** service. 

![cleavr install docker service](/images/plausible/cleavr-install-docker.png)

Plausible wraps up their program in a docker container and so we just need to first make sure Docker is installed on the server. 

##  Step 2: Add Generic Port App

Add a new **Generic Port App** on the server. Add in the URL you want assign to Plausible Analytics. 

For the port number, add in `8000`. If you have another app using the port, you can customize the port number. 

![generic port app](/images/plausible/cleavr-generic-port-app.png)

##  Step 3: Run Plausibe Quick Script

In the **Quick Script** section of Cleavr, add a new quick script with the following script: 

```
cd /home/cleavr
mkdir plausible
cd plausible
git clone https://github.com/plausible/hosting
cd hosting
key="$(openssl rand -base64 64 | tr -d '\n' ; echo)"
echo "
ADMIN_USER_EMAIL={{ADMIN_USER_EMAIL}}
ADMIN_USER_NAME={{ADMIN_USER_NAME}}
ADMIN_USER_PWD={{ADMIN_USER_PWD}}
BASE_URL={{BASE_URL}}
SECRET_KEY_BASE=$key
" > plausible-conf.env

docker-compose up -d
```

Save the quick script and then run it as `cleavr` user. Add in the required variables for user name, email, password, and url. 

<base-info>
After the script finishes running, you will likely get a false error. Verify the URL you used to make sure that Plausible was successfully installed. 
</base-info>

##  Step 3: Verify Installation And Set Up Plausible

Once the script run is complete, navigate to the url you configured Plausible with and verify the login page shows. 

From here, log in and set up Plausible for your sites! 
