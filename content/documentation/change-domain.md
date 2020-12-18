---
title: 'Change Domain'
description: 'Change the free Cleavr domain to one of your own.'
image: 'https://docs.cleavr.io/images/newsite.png'
video: ''
---

If you use a free Cleavr domain, you have an opportunity to change the domain to one of your own. 

To change the domain, navigate to the site in Cleavr, click **Danger Zone**, and then add the new domain in the rename domain section. 

Be sure not add `http`, `https`, or `www` as an A record. Just type in the hostname and any non-www A record. 

### If you update the domain, there may be other updates you need to make, such as: 
- **Backups**: update the path for any filesystems that previously pointed to the directory of the free domain
- **Cron jobs**: update the path for any cron job processes that included the free domain in the path 
- **Process monitors**: update the path for any process monitor that included the free domain in the path
