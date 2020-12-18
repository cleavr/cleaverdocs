---
title: 'Adding New Sites'
description: 'Set up and manage databases for your servers.'
image: 'https://docs.cleavr.io/images/newsite.png'
video: ''
---

## What is a site?
A site can be configured on your servers. Essentially, if your server is going to serve websites or apps, then creating a 
site on a server will handle those requests.

<base-info>
Sites and Web Apps are similar, but are treated a bit differently. At the site level, we disignate what app type will be
associated to the site, but will then mainly be where you go to manage domain level activities - such as SSL, NGINX Cache, authentication, 
and redirects. At the web app level, we'll think more broadly to how the app is set up across one or many servers with more focus on 
deployment activities and production log reports. 
</base-info>
 

## What types of sites can I add?
The following sites types can be added to your provisioned servers.

<base-info>
All of the following app types require certain environments to be installed to run. But don't worry! Cleavr automatically installs
any required environment dependencies when you add the new site. If you'd like to use a specific version, such as PHP 8.0 instead of 7.4, then 
first install the versions you'd like to use in the Services section.
</base-info>

### [AdonisJS](https://adonisjs.com/)
A JavaScript / Typescript framework. Runs with NodeJS. Cleavr is compatible with Adonis version 4 and 5. 

### [NuxtJS](https://nuxtjs.org/)
A VueJS framework. Runs with NodeJS. You can set up either a Server Side Rendered app type or a Static / JAMstack app type. 

### [NodeJS](https://nodejs.org/en/)
A JavaScript runtime. Runs with NodeJS. You can set up either a Server Side Rendered app type or a Static / JAMstack app type.

### [Laravel](https://laravel.com/)
A PHP-based web-framework. Runs with PHP and NodeJS.

### [WordPress](https://wordpress.com/)
WordPress is a free and open-source content management system (CMS) written in PHP and paired with a MySQL or MariaDB database. You will need a database and your preferred version of PHP installed on your server to create your WordPress site.

### [Alpas](https://alpas.dev/)
A Kotlin-based web-framework. Runs with NodeJS and JDK 11. 
 
### [PHP](https://www.php.net/)
A general-purpose scripting language. Runs with PHP. 

### Static HTML
Looking to rock pure vanilla HTML, CSS, and JavaScript? You don’t need to install any of the optional environments on your server to run static HTML sites.  

## Add a site
1. Select the server you want the site to be installed on
2. Select **Sites**
3. Select **Add a new site**
4. Select your desired site type
5. Fill in the domain name or select the option to use a free, SSL enabled Cleavr provided subdomain. 
6. Select whether or not you want to secure your site with SSL certificates - you can secure now or you can secure afterwards; if you secure after site creation, you have the additional option of applying a custom SSL certificate, such as one from Cloudflare for example

<base-alert>
Let’s Encrypt has rate limits - click here to review their <a href="https://letsencrypt.org/docs/rate-limits/" 
class="text-yellow-500 hover:text-yellow-700"
target="_blank">rate limits</a>
</base-alert>

### Additional Options

#### Wildcard subdomains
If you want to use wildcard subdomains with your app, you must enable this feature during site creation. You cannot add it afterwards. 

Enabling wildcard allows you to handle wildcard domains with your application. For WordPress multi-site, you'll want to enable wildcards if you 
plan to use subdomains. 

Cleaver can also auto apply SSL certificates. If you enable both Let's Encrupt and Wildcard Subdomains, then you'll need to select a DNS Profile
to manage applying SSL certificates to wildcard subdomains. 

#### NGINX and FastCGI Caching
You can enable NGINX or FastCGI caching during site setup. You may also enable/disable and further configure caching options after site creation. 

#### Databases
When setting up Adonis, Laravel, or WordPress sites, you can also set up the database at this time as well. Cleavr will go a step further
and update environment variables for Adonis and Laravel apps to connect to your database - making deployments just that much more effortless. 

#### Web Directory
For PHP and Static HTML sites, select the web directory so Cleavr knows what folder to server your site from. 

## How do I point my domain to the server?
For your site to render, you will need to point your domain to the applicable web provider.  

Follow these standard directions to point your domain to your provisioned server.

1. Go to your domain registrar (such as GoDaddy, Network Solutions, Name Cheap, etc)
2. Find your domain and point the DNS to your cloud provider; go to your cloud provider to find out what DNS servers to point your domain to (if your provider doesn’t make this readily available, google usually points you in the right direction fairly quickly)
3. Go to your cloud provider
4. Find the ‘domains’ or ‘sites’ section of your cloud provider
5. Add your domain and point the a-record to your provisioned server’s public IP Address

<base-info>
Connect Cleavr to your Cloudflare or DigitalOcean accounts to manage DNS records directly from Cleavr. This makes managing records more
smooth and convenient. 
</base-info>


## What if I forget to add an environment dependency before creating a site?
Cleavr has your back! If you forgot to install a dependency while adding a site, then Cleavr will detect which dependencies are required and will install the latest version for you so that you can keep moving forward with little fuss. 
