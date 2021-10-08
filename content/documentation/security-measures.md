---
title: 'Security Measures'
description: 'Security is top-of-mind.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What security measures does Cleavr employ for provisioned servers?
Server security is of the utmost importance.

Each of the cloud providers that we integrate with have a set of security standards, compliance, and certifications that they stand by. Here are links to each providers security sections:

- AWS - [https://aws.amazon.com/security/](https://aws.amazon.com/security/) 
- DigitalOcean - [https://www.digitalocean.com/legal/certifications/](https://www.digitalocean.com/legal/certifications/)
- Hetzner - [https://www.hetzner.com/assets/Uploads/downloads/Sicherheit-en.pdf](https://www.hetzner.com/assets/Uploads/downloads/Sicherheit-en.pdf)
- Linode - [https://www.linode.com/legal-security/](https://www.linode.com/legal-security/)
- Vultr - [https://www.vultr.com/docs/category/security/](https://www.vultr.com/docs/category/security/)
 

In addition to security measures taken by your chosen cloud provider(s), Cleavr performs the following security actions when provisioning your servers:

- Installs [fail2ban](https://www.fail2ban.org/wiki/index.php/Main_Page) - an intrusion prevention framework that helps prevent servers from brute-force attacks
- Configures [Uncomplicated Firewall](https://help.ubuntu.com/community/UFW) (UFW) - a firewall config tool that comes standard with Ubuntu, by opening ports 80, 443, and 22 and denying all other incoming connections and enables logging
- Sets up [SSH private and public keys](https://www.ssh.com/ssh/key/) to allow for secured remote connections
- Configures server to automatically install server level security updates
 

## What additional security measures does Cleavr employ?
We go through great lengths to ensure your information is secured as much as possible within the Cleavr system. We do this by:

- Never saving important server access information, including sudo password, database password, environment variables, and SSH keys. Cleavr is used as an interface to create and distribute this information to your provisioned servers; however, this information is not stored in Cleavr’s databases.
- Encrypting sensitive data in our database
- Not displaying back-end identifiers in URLs

## HSTS

If you'd like to lock down and deter eavesdroppers listening over HTTP, you can enable the NGINX HSTS directives. 

Before undertaking the tasks to enable, make sure you have SSL applied to your sites on the server. Also, make sure that you indeed
want to enable it. 

### Step one

SSH into your server and open the following file. 

```
/etc/nginx/h5bp/directive-only/ssl.conf
```

### Step two

Scroll down until you see the following commented out section. 

![hsts](/images/server/hsts.png)

Uncomment the lines you want to enable and then save the file. 

### Step three

In Cleavr, restart NGINX service. 
