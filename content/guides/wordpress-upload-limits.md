---
title: 'Increase PHP and NGINX upload limits for WordPress'
description: 'How to increase PHP and NGINX upload limits.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

<you-tube video="rxQMMvvsNS8"></you-tube>

PHP has a `2mb` upload limit. This is often insufficient for some things you want to do with WordPress and may inhibit plugin installation. 
To change this, you must make configuration updates to both PHP and NGINX. 

<base-info>
This is often a standard task for WordPress sites. However, these instructions also apply to any PHP app where you might need
to modify file upload limits. 
</base-info>

## PHP configurations

In the server > services > PHP settings section (click the wrench icon), you can increase the upload limits, and you will likely want 
to increase the max_input_time, upload_max_filesize, and memory_limit variables. 

Such as:

- `max_input_time` = 900
- `upload_max_filesize` = 128m
- `memory_limit` = 256m

## NGINX configurations

After updating PHP, go back to the services section and select the wrench icon for NGINX.

1. Add `client_max_body_size 128m;`
2. Save file
3. Restart nginx by clicking on the restart icon

This should allow you to upload larger file sizes to your WordPress site. If you are curious whether the configs 
were updated and what other configs you might want to alter for your WordPress site. WordPress has a section that displays 
current configs located in the `WordPress admin dashboard > tools > site health > info > server tab.`

## 502 Errors When Calling `wp-admin/admin-ajax.php`

Some themes and plugins rely heavily on AJAX requests, which can sometimes cause `502` errors when `wp-admin/admin-ajax.php` is called. To attempt to fix this, add the following into the `http` section of your `/etc/nginx/nginx.conf`.

1. Navigate to Server > [The server you want to update] > Services > Nginx.
2. Click the three dots on the far right and open the menu.
3. Select `Edit nginx.conf`
4. In the `http` section, add:
```
   ##
   # FastCGI Settings
   ##
   fastcgi_temp_file_write_size 10m;
   fastcgi_busy_buffers_size 512k;
   fastcgi_buffer_size 512k;
   fastcgi_buffers 16 512k;
```
5. Click `Update`
6. Click the three dots on the far right to reopen the Nginx menu.
7. Select `Restart`.

Once you reload the page generating the error and try again, you should not see the `502` error.
