---
title: 'How to point your domain to your server'
description: 'How to point your domain to your server.'
---

##  Check your DNS status 
Use [DNS Checker](https://dnschecker.org/) to verify that your domain has successfully propagated before adding a site with SSL. 

<base-alert>
This is the cause for most site creation failures as the DNS needs to be propagated to successfully verify the domain points to the correct server during the SSL creation process. 
</base-alert>
   
When setting up a site, you will need to point the a record for the domain you are setting up to the provisioned server. 
   
How you do this is dependent on the domain registrar and DNS services that you use. 

Many of the cloud providers, such as DigitalOcean and Vultr, have DNS services you can use to point to your server. 

<base-point>
Using Cleavr's <a href="/managing-records">DNS Management</a> feature makes it a breeze to manage records from directly within Cleavr. 
</base-point>

   
## Standard steps to get your domain up and pointing to your server. 
   
1. Purchase a domain via a registrar such as namecheap, godaddy, network solutions, etc
2. Go to the DNS services provider you wish to use, such as DigitalOcean as an example
3. Locate the domain name servers for the provider that you will need to point the domain to; for example, DigitalOcean has you point your domain to `ns1.digitalocean.com`, `ns2.digitalocean.com`, and `ns3.digitalocean.com`
4. Navigate back to you domain registrar, manage your domain, and add in the dns records to point to name servers discovered in the previous step
5. Navigate back to DNS service provider, locate the domain setup area, and add your domain
6. Point the 'a' record to the public IP of your provisioned server 

<base-info>
You can configure subdomains by adding the subdomain record to both your dns service and to Cleavr when adding the url for the site you are creating
</base-info>

Please note, often it takes time when initially registering and configuring a domain for it to propagate around the globe. Use DNS Checker to verify the NS and A records have propagated. This is especially important if you are adding SSL certificates to the site as the service requires the domain to point to the correct server IP when assigning a certificate. 

<script>
    import BasePoint from "@/components/global/BasePoint";
    export default {
        components: {BasePoint}
    }
</script>
