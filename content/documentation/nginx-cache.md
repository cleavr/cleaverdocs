---
title: 'Cache'
description: 'Make your sites zoom with NGINX and FastCGI caching.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

<you-tube video="EuUNFxglPWA"></you-tube>

## What is caching?
Caching is where certain assets are stored either locally on your device or on a server. You may be familiar with caching 
on your Chrome, Firefox browser. This client-side caching saves assets on your device which helps webpages load more quickly 
the second time you visit the site. 

NGINX caching is server side caching where assets are stored on the server to make requests load faster. Server and client 
side cache working side by side make website load times more performant. 

Though we can't help with client-side caching, Cleavr definitely helps with server side caching with the help of NGINX. 

## What is FastCGI Cache? 
FastCGI cache is available for PHP sites (PHP, Laravel, WordPress) and is designed to cache dynamic content. It really 
makes your PHP sites zoom. 

## Enabling Cache
To enable NGINX cache, go to the site you wish to enable it for > click on settings > then click **Enable Cache**. This will 
enable basic caching for your site. Basic may be all that you need; however, if you want to go more advanced, you can 
configure the cache settings after you enable caching. 

If you need to disable Cache, all you need to do is select **Disable Cache**. 

## Clear Cache
You may need to clear your cache from time-to-time; especially, after deploy updates that will require the old-cached items 
to be cleared so they are no longer served. You can also clear cache via deployment hooks to make the process more expedient during deployments. 

## Clear Cache Trigger Hook
Use the provided trigger hook to clear your site's cache. You can use this in a POST request to clear cache. 

<base-alert>
Do not openly share your trigger hook URL as this can be used by others outside of your control. 
</base-alert>

Simply select **Clear Cache** to clear the cache for your site. 

## NGINX unlink() error message

If you enable caching and use the cleavr cache trigger hook, whether by clicking the 'Clear Cache' button in Cleavr, using the trigger hook in an external tool, or
by using the Cleavr Clear Cache WordPress plugin, you may notice errors in the NGINX error log that look like the following: 

```
2020/09/20 12:30:42 [crit] 355564#355564: unlink() "/opt/cleavr/nginx/www.example.com/3/bf/e217a0f2cvv0fb5bbcf11cf0902cbbf3" failed (2: No such file or directory)
```

What is happening here is that NGINX will automatically clear cache on a set interval. If the cache was deleted by one of the above methods, then NGINX will throw the above error. 

It is marked as 'critical' but is an expected error in this scenario. 
