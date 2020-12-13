---
title: 'SSH Keys'
description: 'Set up and manage SSH keys for your servers.'
---

## What is an SSH Key?
Secure Shell (SSH) Keys allow you to establish a secure shell session connection with your server over an unsecured network 
using a cryptographic network protocol. Think of it as a username and password on steroids that you can use to securely 
access your server via your computer. You can use this method to create automated processes or to access your server’s 
shell to perform various actions; such as, troubleshooting issues by accessing server logs.  

## How do I create an SSH Key?  
Before you can add an SSH key to Cleavr, one has to be created for your machine. The instructions on [https://kb.iu.edu/d/aews](https://kb.iu.edu/d/aews) 
will help guide you creating an rsa key on a Mac or Windows device. Once your keys are created, locate your public key 
that will be added to Cleavr.


## Add a new SSH key
Add public SSH keys by going to the server you want to add the key to, select SSH Keys, provide a reference name for the key 
that you are adding, and then paste the public key into the text field and click Add.

SSH Keys are not saved by Cleavr or viewable within Cleavr, they are added directly to the server and are referenced by 
name and id by Cleavr. If a key changes, you will need to remove the existing entry and then add in the new key.

Multiple private keys can be added via Cleavr.

<base-info>
In your account profile area, there is a <b>Key Bank</b> section where you can add commonly used keys and even set them to 
automatically be added to new servers that are provisioned. 
</base-info>

## Public SSH Key for external services
The public key shown on the bottom of the page is the public key for your server. You can add this to other servers that 
your server may need to securely access.
