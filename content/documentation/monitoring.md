---
title: "Monitoring"
description: "Monitor your servers performance, space, web traffic, and database activity."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

Monitoring displays key analytics about your server's performance. Available with the Pro subscription, you can enable Monitoring either from Server > Monitoring or by adding it as a service from Server > Services.

![enable monitoring to view server performance](/images/cleavr-server-monitoring-slim.png)

With monitoring enabled, you can view:

- CPU utilization
- Available memory
- Disk space
- Server uptime
- Web requests and types

<base-info>
Monitoring displays historical information graphically and does not include any kind of alert settings or notifications. Cleavr use NetData for monitoring and you can also access the NetData dashboard directly for even more detailed information and features. 
</base-info>

## Database Monitoring

If you have a database installed on your server as well as system monitoring, then you can optionally enable Database monitoring from the Server > Database section to view key database information.

## Database Troubleshooting

If Monitoring does not install correctly and graphs do not display, then try the following:

1. Click on the 'Repair' button
2. Try uninstalling and reinstalling from the Services section
3. Check that port 80 is opened in the Firewall section of the Services page
