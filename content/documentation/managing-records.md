---
title: 'Managing DNS Records'
description: 'Manage DNS records directly from within Cleavr.'
---

You can manage your DNS records from within Cleavr by enabling Cloudflare or DigitalOcean integrations by adding a DNS Profile. 
This makes configuring sites in Cleavr a lot easier as you can do the necessary management from one place as opposed to 
opening several windows to get the job done. 

In addition to setting up the DNS Profile in Cleavr, you will also need to make sure that you point your domain to the 
correct nameservers from your Registrar. 

## Synch records
If you've managed records outside of Cleavr, click the synch button to sync records up. 

## Create a new DNS record
Cleavr lets you manage A, CNAME, and TXT records. Other record types will need to be made within the DNS management provider directly. 

## Add A records
Select the A record tab and add in the hostname. Use the @ symbol if you are directing traffic to the main domain. 
Or, enter a name for the sub-domain if you are directing traffic to a sub-domain. You do not need to add the whole domain. 

Enter the IP address that traffic should be directed to and then enter TTL (time to live - tells the DNS resolver how long 
to cache a query before requesting a new one). 

Select **Create Record** to add new record. 
 
## Add CNAME records
Select the CNAME record tab and add in the hostname. Usually, you'd add a sub-domain here, such as "blog". 

Enter the IP address that traffic should be directed to and then TTL. 

Select **Create Record** to add new record. 
 
## Add TXT records
Select the TXT record tab and add in the hostname. Add in the TXT content, set the hostname to associate it to, and enter TTL. 

Select **Create Record** to add new record. 

## Modify or remove new DNS record
To modify a record, select the row on the DNS Records table and modify the record in the slide-out window or delete the 
record from the slide-out menu. 

