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

<base-info>
Plausible includes an email system. Please be aware that many VPS providers close port 25 by default. If you want Plausible to send emails, you may need to 
contact your provider to request port 25 to be open or use an alternate method. 
</base-info>


## Worried About Missing Data? 

With the above setup, you are adding Plausible Analytics to a domain and server that you own. However, client script blockers may still block usage analytics tracking since the domain for your Analytics will be different than the site's. 

Plausible allows you to get around this by proxying the script and the events API so that they use your site's domain. This will prevent most script blockers from blocking usage data collection on your site, giving you more accurate usage data. 

### Step 1: Create NGINX Cache Directory

For this setup, we'll follow [Plausible's instructions](https://kaytaabemwznss9o2787.cleaver.rocks/) and will create a new directory to cache the Plausible js script. 

In Quick Scripts, add a new Quick Script with the following script: 

```
mkdir -p /var/run/nginx-cache
```

Run the script on the server your site is on. 

### Step 2: Adjust Site's NGINX Configuration

For the site you want to enable the proxy for, go to the **NGINX Confg** section. 

Directly above `server {`, add the following for the cache path: 

```
proxy_cache_path /var/run/nginx-cache/jscache levels=1:2 keys_zone=jscache:100m inactive=30d  use_temp_path=off max_size=100m;
```

Now, find the `location / { ... }` directive and add the following two directives below it: 

```
location = /js/script.js {
    # replace your.plausible.domain with your plausible domain, don't include http/https
    proxy_set_header Host your.plausible.domain;
    proxy_ssl_name your.plausible.domain;
    proxy_ssl_server_name on;
    proxy_ssl_session_reuse off;

    # replace your.plausible.domain with your plausible domain
    proxy_pass https://your.plausible.domain/js/plausible.js;

    # Tiny, negligible performance improvement. Very optional.
    proxy_buffering on;

    # Cache the script for 6 hours, as long as plausible.io returns a valid response
    proxy_cache jscache;
    proxy_cache_valid 200 6h;
    proxy_cache_use_stale updating error timeout invalid_header http_500;

    # Optional. Adds a header to tell if you got a cache hit or miss
    add_header X-Cache $upstream_cache_status;
}

location = /api/event {
    # replace your.plausible.domain with your plausible domain, don't include http/https
    proxy_set_header Host your.plausible.domain;
    proxy_ssl_name your.plausible.domain;
    proxy_ssl_server_name on;
    proxy_ssl_session_reuse off;

    # replace your.plausible.domain with your plausible domain
    proxy_pass https://your.plausible.domain/api/event;

    proxy_buffering on;
    proxy_http_version 1.1;

    proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Host  $host;
}
```

Be sure to replace `your.plausible.domain` instances above with the domain that you are hosting your plausible instance at. 

**Save** the new NGINX configuration for your site. 

### Step 3: Update Your Tracking Script

Lastly, in your site's code, adjust your tracking script as follows: 

```
<script defer data-api="/api/event" data-domain="yourwebsite.com" src="/js/script.js"></script>
```

Replace `yourwebsite.com` with the domain that you added to Plausible. 

That's it! Your site will now proxy the tracking scripts and api domains with your site's domain. 
