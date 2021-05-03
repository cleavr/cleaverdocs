---
title: 'Custom Servers'
description: 'Take the hassle out of provisioning and configuring servers yourself. Cleavr makes it a breeze.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

<you-tube video="kTT2JWTUXIo"></you-tube>

When selecting the **Custom** server option - 

1. SSH into your custom server as root and run the provided script
2. Add the **public IP**
3. Optionally, enable **Server Monitoring**
3. Optionally, select a **database**
4. Optionally, select server **environment**
5. Click **Start Provisioning**

## Custom Server Considerations
When connecting to a custom server, Cleavr will not have connectivity that Cleavr has with integrated VPS providers. There are some
additional considerations to be aware of when using the Custom Server option. 

- To add a custom server, you must have Ubuntu 20.04x64 installed on the server and you must be able to SSH into the server as root user to run a command prior to Cleavr imaging the server.
- If you delete a custom server from Cleavr, this will not also destroy the server from the custom provider. Cleavr does not gain
  that level of access. If you remove a server from Cleavr you will also need to remove it from your custom server provider. 
- Some providers may block HTTPS access (Google Cloud, Lightsail) by default and you'll need to enable HTTPS for sites with SSL to render. 


