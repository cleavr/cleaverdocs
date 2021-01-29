---
title: 'WordPress Multisite'
description: 'Easily enable and get started with WordPress Multisite with Cleavr'
image: 'https://docs.cleavr.io/images/enable-multisite.png'
video: ''
---

WordPress Multisite can be setup without the need of manually updating the `wp-config.php` file. 

<base-alert>
If you're enabling Multisite, be sure to follow the instructions exactly. Otherwise, you may
get a 'too many redirects' error when attempting to access your WordPress site.
</base-alert>

## Prerequisites

Before proceeding, you must have a [DNS Profile](/providers#dns-profiles) setup in Cleavr if you plan to use WordPress'
subdomain multisite option. 

In your DNS profile, add the appropriate records: 

- Hostname (@) pointing to your server's public IP address
- Wildcard (*) A-record pointing to your server's public IP address


## Create new WordPress site in Cleavr

![Enable Multisite](/images/enable-multisite.png)

Add a new site to a server and select the **Enable Multisite** option. 

- If you intend to use **sub-domains** Multisite type, you'll need to enable the **Allow wildcard subdomains** option
- If you intend to use **sub-directories** Multisite type, then do not enable the Allow wildcard subdomains option. 

If you enable **Let's Encrypt** AND **Enable Multisite**, you will first need to add a DNS Records for your root domain and an 
additional DNS 'A' Record for `*` wildcard. They must both point to the server's public IP.  

## Set up WordPress and install Multisite

Once Cleavr has completed adding your new WordPress site, go to the domain for the site and complete the initial 
WordPress setup. 

After initial setup is complete, log into WordPress as an admin. 

It is recommended you disable all plugins in the plugin section. 

Now, navigate to `Tools > Network Setup`. 

![Install Multisite](/images/install-multisite.png)

You'll be presented with two options for Multisite, **Sub-domains** and **Sub-directories**. Select the type you wish to install and then click **Install**.

![Multisite Complete](/images/multisite-complete.png)

After you click install, you'll be directed to a page with some configs to add to `wp-config.php`.

Good news! You do not need to manually add this info. 

Back in Cleavr, go to the server you added WordPress to. You will see a button to **Finish Multisite Setup**. Click 
this button to complete the setup.  

![Finish Multisite](/images/finish-multisite.png)

Lastly, go back to the WordPress website and you'll need to log back in. 

Congratulations! Your WordPress Multisite is now all ready for you. 🎉

