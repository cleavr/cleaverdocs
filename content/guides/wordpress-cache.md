---
title: 'WordPress and FastCGI Cache'
description: 'How to work with WordPress and NGINX FastCGI Cache.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

Utilizing FastCGI Cache with your WordPress site helps speed up requests for your sites and provides
users an improved user experience with decreased load times. 

To turn on [FastCGI](https://docs.cleavr.io/nginx-cache#what-is-fastcgi-cache), go to your site in Cleavr, 
click on **FastCGI** and then click enable if not already enabled. 

This will provide the following abilities right off the bat: 

### Clear Cache 
Clicking this button will clear the cache for the site. 

<base-info>
If FastCGI cache is enabled and you clear cache using the hook or the Cleavr WordPress plugin, please note that you may see in the NGINX error log a related event that is logged that is marked critical. This is due to 
NGINX not seeing the cache file when it is set to automatically clear the cache and as a result writes an error to the log. This error doesn't critically impact NGINX and can be ignored.
</base-info>

### Clear Cache Trigger Hook
You can use this hook to programmatically clear the site's cache. 

An additional use-case for this is to use it in conjunction with Cleavr's Clear Cache WordPress plugin. 

### Directives
The text area provides the default directives for FastCGI Cache. This is a starting point to provide
some basic configurations that you can customize and add to for your specific needs. 

### NGINX Configs
Additionally, you may need to update some of the site's NGINX settings for FastCGI optimization which can 
be done in site > settings > NGINX Configs. 

## Cache location
Cleavr stores site cache (`fastcgi_cache_path`) in the following directory on your server: 

```
/opt/cleavr/nginx/<site name>
```
<base-info>
You may need to supply this directory for certain WordPress NGINX Cache Plugins. 
</base-info>

## WordPress NGINX Cache Plugins

### Cleavr Cache Clear
We created a variation of the popular **NGINX Cache** plugin that better works with Cleavr's setup 
and is something that we'll be expanding functionality for. 

The plugin is called [Cleavr Clear Cache](https://wordpress.org/plugins/cleavr-clear-cache/) and is available in the WordPress plugin library. 

One of the key features is that it allows for clearing cache for sites assigned to server users in addition to the **cleavr** user. 

You'll need to provide the **Clear Cache Trigger Hook** when setting up this plugin. 

Contact us at hello@cleavr.io for the plugin. 

### NGINX Cache
Several users in the Cleavr community have recommended [NGINX Cache](https://wordpress.org/plugins/nginx-cache/).

With this tool, you can clear cache with a click of a button from your WordPress admin section and even set it to
auto-clear cache when content is changed. 

As mentioned previously, there is a limitation with the plugin in that it only works for websites that
are assigned to the 'cleavr' server user. The limitation is more so due to how NGINX creates cache files and 
assigns ownership. 

You'll need to provide the path to the cache location (`/opt/cleavr/nginx/<site name>`) when setting
up this plugin. 

## Inactive Cache Setting

If cache has not been accessed in 60 minutes, NGINX will automatically clear the cache. 

This is a default setting in `/etc/nginx/cleavr-conf/<site-name>/header/cache.conf`.

```
fastcgi_cache_path /opt/cleavr/nginx/<site-name> 
levels=1:2 keys_zone=<site-name>:10m inactive=60m;
```
You can shorten or extend this time by SSH'ing into your server and updating `inactive=60m`.

You can change the interval, for example: 
- `10m` for 10 minutes
- `10h` for 10 hours
- `10d` for 10 days
