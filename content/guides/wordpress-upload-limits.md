---
title: 'Increase PHP and NGINX upload limits for WordPress'
description: 'How to increase PHP and NGINX upload limits.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

<you-tube video="rxQMMvvsNS8"></you-tube>

PHP has a 2mb upload limit. This is often not enough for some things you want to do with WordPress and may inhibit plugin installation. 
To change this, you'll need to make configuration updates to both PHP and NGINX. 

<base-info>
This is often a standard task for WordPress sites. However, these instructions also apply for any PHP app where you might need
to modify file upload limits. 
</base-info>

## PHP configurations

In the server > services > PHP settings section (click the wrench icon), you can increase the upload limits, you will likely want 
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

This then should allow you to upload larger file sizes to your WordPress site. If you are curious as to if the configs 
were updated and to what other configs you might want to alter for your WordPress site, Wordpress has a section that displays 
current configs located in the `WordPress admin dashboard > tools > site health > info > server tab.`
