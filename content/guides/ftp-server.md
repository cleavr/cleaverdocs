---
title: 'Access Server Via FTP'
description: 'How to access you server via FTP.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What you will need

- An FTP client, such as **FileZilla** or **CommanderOne** (Mac)
- Your server username; **cleavr** is created by default as a username during provision
- Your SSH public key
- Your server's public IP

<base-info>
Cleavr requires SFTP access, which utilizes SSH keys. This is to provide additional security. 
</base-info>

## To Connect

Using CommanderOne (Mac) as an example - 

1. Add your public [SSH key](/ssh-keys) to the server you are accessing
2. Enter your server public IP into host
3. Enter username you assigned your SSH key to in step one (Cleavr is default)
4. Point password to your id_rsa file location
5. Click **Connect**

💥 You should now be connected to your server and ready to use your FTP client. 
