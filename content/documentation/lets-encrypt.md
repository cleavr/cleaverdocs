---
title: "Let's Encrypt Errors"
description: 'Cleavr uses Gravatar for avatars.'
---
## 😎 Check your DNS status 
Use [DNS Checker](https://dnschecker.org/) to verify that your domain has successfully propagated before adding a site with SSL. 
This is the cause for most site creation failures as the DNS needs to be propagated to successfully verify the domain points 
to the correct server during the SSL creation process. 

Cleavr will perform a check before you attempt to add SSL certs to a domain. However, the actual verification is done by 
Let's Encrypt and their servers will check to make sure the IP applying for SSL cert is the same that their servers identify during their
verification process. 

Error code **aXNzdWVzc2w** is an SSL certificate creation error. 

## What went wrong? 
This error occurs when the Let's Encrypt services is attempting to verify that the domain is pointing to the correct IP 
and is receiving an invalid response. In other words, it is most likely that the domain is not correctly directing traffic 
to the server's public IP or that the record has not yet propagated to the verification service that is performing the verification check. 

To resolve, verify the 'a' record points to the correct server public IP using DNS Checker and then attempt to re-create the site. 
