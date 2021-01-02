---
title: 'WordPress Advanced Configurations'
description: 'How to access your database via SSH.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

<you-tube video="5ZfPMj5doC0"></you-tube>

Sometimes, you may need to add a bit more juice to WordPress by editing PHP configurations. For example, PHP defaults uploads 
at a maximum of 2 mb. That is to encourage better performance with smaller files sizes; however, often times you may want to 
download and install a plugin that exceeds this limit.

## Enable FastCGI

<you-tube video="EuUNFxglPWA"></you-tube>

Enabling FastCGI cache makes your site load quicker for your users.

To enable, go to the site in Cleavr, go to the settings section, select **FastCGI Cache**, and then enable FastCGI.

Cleavr has default values for FastCGI, but you can customize the settings accordingly.


## Edit PHP configurations for server

1. In Cleavr, navigate to the **server** where you want to edit PHP configs
2. Select **Services**
3. Select **wrench icon** next to the PHP version you wish to edit
Edit the settings to your specifications and select **update** when finished

This action will update the settings in the php.ini file.

## Edit PHP version for site

Sometimes, you may want to use a different version of PHP for your site. This may be due to a plugin requiring an older version of 
PHP or maybe you want to upgrade your site to the latest version. 

1. On your server, navigate to the services section and install the version of PHP you want to use
2. Then, navigate to the site you want to change the PHP version for
3. Select the **Settings** tab
4. Next, select the **PHP version** tab
5. And lastly, select the version of PHP you want to use then click **Update**
