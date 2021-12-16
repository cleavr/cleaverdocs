---
title: 'Change connection key for your server'
description: 'How to change connection key for your server.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

Cleavr connects to servers using an SSH connection. 

This guide shows you how to change the SSH keys if you need to reset them. 

This need most often arises for users who use a custom server as some server providers will rotate / cleavr SSH
keys on certain intervals or during a reboot. This will result in breaking the connection that Cleavr has with your custom server. 

## Step 1 - Copy the Update Server Connection Key

In Cleavr, navigate to the server > The Danger Zone, find the **Update Server Connection Key** section and then click the 
**Copy to Clipboard** button. 

![Update server connection key](/images/ssh/update-key.png)

## Step 2 - SSH into your server

SSH into your server and paste in the command that was copied in step 1. Run the command. 

This will add the public SSH keys to the root directories as well as for server users. 

## Step 3

Back on the server's Danger Zone page, click the button to **Verify Key and Update**. 
