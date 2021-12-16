---
title: 'Custom Servers'
description: 'Take the hassle out of provisioning and configuring servers yourself. Cleavr makes it a breeze.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

<you-tube video="kTT2JWTUXIo"></you-tube>

When selecting the **Custom** server option - 

1. SSH into your custom server as root and run the provided script
1. Add the **public IP**
1. Click **Start Provisioning**

<base-alert>
We recommend to use a fresh server and not a server that has existing sites, NGINX, and other web services running on it as they 
may interfere with Cleavr. 
</base-alert>

## Custom Server Considerations
When connecting to a custom server, Cleavr will not have the same connectivity that Cleavr has with integrated VPS providers. There are some
additional considerations to be aware of when using the Custom Server option. 

- To add a custom server, you must have Ubuntu 20.04x64 installed on the server and you must be able to SSH into the server as root user to run a command prior to Cleavr imaging the server.
- If you delete a custom server from Cleavr, this will not also destroy the server from the custom provider. Cleavr does not gain
  that level of access. If you remove a server from Cleavr you will also need to remove it from your custom server provider. 
- Some providers may block HTTPS access (Google Cloud, Lightsail) by default and you'll need to enable HTTPS for sites with SSL to render. 
- Some providers rotate SSH keys periodically and/or during a server reboot. This will sever Cleavr's connection to the server and you will need to [update Cleavr's connection](/guides/cleavr-connection).

