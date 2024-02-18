---
title: "Change Domain"
description: "Change existing domain to any other domain."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

To change the domain, navigate to the site in Cleavr, click **Rename site**, and then fill the input field with the new domain.

Be sure not add `http`, `https`, or `www` as an A record. Just type in the hostname and any non-www A record.

### If you update the domain, there may be other updates you need to make, such as:

- **Backups**: update the path for any file systems that previously pointed to the directory of the free domain
- **Cron jobs**: update the path for any cron job processes that included the free domain in the path
- **Process monitors**: update the path for any process monitor that included the free domain in the path
- **SSL Certificates**: there is an option to `Install free SSL` while renaming a site which will take care of SSL Certificate for the primary domain. For any other SSL Certificates please navigate to SSL Certificates page and create a new certificate.
- **Aliases**: navigate to the `Domain Aliases` page and update the aliases.
