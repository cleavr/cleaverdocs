---
title: 'PHP-FPM Settings'
description: 'Configure PHP-FPM settings to get more out of PHP.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: 
---

PHP-FPM settings may be configured at the PHP version + server user level. As in, PHP version and 
server users are tied together and PHP-FPM settings are applied to the combination of PHP version + server user. 

To update settings, navigate to a site in Cleavr and go to Site Settings. 

Click on **Update FPM Settings**. 

![Update php-fpm settings](/images/server/php-fpm-settings.png)

From here, you can modify the php-fpm settings. 

![Update php-fpm settings](/images/server/php-fpm-settings-configure.png)

<base-alert>
Be very careful when modifying these settings as some settings are dependent on other settings. After modifying, look
at the PHP error log in server > log to verify that no related errors occur after making the modifications. 
</base-alert>

## Pool reached, consider raising pm.max_children warning

FPM allows for concurrent processes to run. Sometimes, your sites may have more than the default concurrent defaults connections allowed, in which requests will
then be placed in a queue. This can impact visitor performance.

If you look at the PHP error log in the server > log section, you may notice a warning that looks like the following: 

```
WARNING: [pool cleavr] server reached pm.max_children setting (5), consider raising it
```

You may modify the `pm.max_children` setting here. 

### Calculate pm.max_children setting

A simple calculation for figuring out max children looks like the following: 

1. Figure out the amount of RAM used for PHP - roughly, total server RAM minus database RAM and other non-PHP processes. 
1. Figure out the average process size 
1. Divide RAM for PHP (in Mb) by Avg process size (in Mb)

To figure out average process size, you can run the following command on your server console: 

```
# swap out 8.0 below with version of PHP you are running
ps -C php-fpm8.0 -o rss=  

# Results for this example 
35036
12724
12724
12724
12724
12724
12728
12728
12728
```
In the above output, ignoring the first line (35036), we get a rough average of 12,726 Kilobytes, or ~13 Megabytes. 

If in the above example, we have a server that has 1 GB of RAM and 700 Mb is used for PHP, then we'd calculate as: 

700 (Mb) / 13 (Mb) = ~54 

Therefore, we'd set pm.max_children to 54

We'd want to set the other values as well. 

Here is a general breakdown: 

pm.max_children = max_children
pm.start_servers = 25% of max_children
pm.min_spare_servers = 25% of max_children
pm.max_spare_servers = 75% of max_children

Applying this to our example, our final settings might look like: 

```
pm.max_children = 54
pm.start_servers = 14
pm.min_spare_servers = 14
pm.max_spare_servers = 41
```

<base-alert>
To reiterate, after changing these cofigs, check the PHP log in server > logs to make sure there are no errors as a result of making the modifications.
</base-alert>
