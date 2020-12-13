---
title: 'NGINX Cache'
description: 'Make your sites zoom with NGINX and FastCGI caching.'
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

Simply select **Clear Cache** to clear the cache for your site. 
