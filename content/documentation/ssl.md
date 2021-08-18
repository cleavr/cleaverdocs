---
title: 'SSL'
description: 'Set up and manage Lets Encrypt and custom SSL certificates.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What is a SSL Cert?
SSL Certificates, or secure sockets layer certificates, are certs that denotes a secured website that uses the https protocol. 
SSL will provide secured connections between your device and end-point servers. 

<base-alert>
It is important to secure your sites as many modern-day browsers require or strongly recommend their usage. 
</base-alert>

## How do I add SSL to my site?
You can add SSL to your website during the site creation steps or afterwards. It is important that if you are applying SSL 
during site creation, that you have properly configured your DNS beforehand and that the domain you are using points to 
the server you are setting your site on and that the connection has fully propagated. If full propagation has not yet occurred, 
then your site creation will likely fail and you'll need to remove and re-add the site. 

The other method, and safer method if you are unsure if the DNS configurations have fully propagates, is to enable SSL after 
you create your site. To do this, after site is created, go to your server > your site > SSL and add a cert. 

## What SSL Cert service providers can I use?
### Let's Encrypt
Cleavr makes SSL easy and free with Let's Encrypt. If you are enabling SSL during site creation, it will be encrypted with 
certs from Let's Encrypt. Let's Encrypt certs expire after 90 days; however, we will automatically renew the certs for you are 
long as the site is active. 

There are some key things to keep in mind if you do choose to use Let's Encrypt. 
1. When applying LetsEncrypt, you will first need to configure the DNS record to point to the public IP that the site is being hosted on
2. Make sure to give time for the DNS record to propagate - Cleavr will perform an automatic check, but you can also use [DNS Checker](https://dnschecker.org/) as another reference point
3. Any DNS proxy settings, such as Cloudflare's proxy, will need to be turned off as Let's Encrypt verifies the IP provided matches what their servers see for the domain
4. For automatic renewals to work, the IP and site cannot be obfuscated with DNS proxies, IP filtering, etc because if Let's Encrypt cannot see the site and IP, then the certs will not automatically renew

### Custom SSL
You can also apply your own SSL certs. To do this, do not enable SSL during site creation and apply SSL after the site has 
been created. Select the custom cert option and then add in the certificate and the private key to apply the cert. 

## Apply a Cloudflare SSL cert
If you'd like to use Cloudflare's SSL certs, which are also free and can last up to 15 years, you can add it as a custom SSL cert. 

### Here are the steps: 

1. Create a site in Cleavr but do not enable SSL during site creation
2. In your Cloudflare account, go to your domain, select **DNS**, and make sure the **Proxy Status** for the A Record pointing to your server is set to **Proxied**. Click the icon to change to Proxied. 
3. Click on **SSL/TLS** and on the **Overview** tab, make sure **Flexible** is selected
4. Click on the **Origin Server** tab and then click on **Create Certificate**
5. On the modal the pops up, you can leave everything on the default settings or configure hostnames and certificate validity if you'd like; otherwise, click **Next**
6. Copy the full **Origin Certificate** and **Private Key**; these will be added into Cleavr, then click on **OK** to create certificate
7. Back in Cleavr, go to your **Site > SSL** and select the **Custom SSL** option 
8. Paste the **Origin Certificate** and **Private key** into their respective areas and then click **Install** to add cert
9. Lastly, go back to Cloudflare and then go to your **domain > SSL/TLS** and on the **Overview** tab, select **Full**

To test, simply open your domain in the browser and see if the site is now secured using https://
