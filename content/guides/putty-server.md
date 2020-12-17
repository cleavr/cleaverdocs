---
title: 'Access Server Via PuTTY'
description: 'How to access you server via PuTTY.'
---


If you are a Mac user, using `ssh cleavr@<server public ip address>` via the terminal is an easy no brainer to SSH into your remote server.

Microsoft Windows, on the other hand, makes it a little more difficult to SSH as many versions of Windows don’t support OpenSSH.

For both Mac and Windows, the most efficient way to SSH into your Cleavr server is to use an RSA private/public key pair.

Creating the keys via Mac terminal is as simple as running `ssh-keygen -t rsa`.

However, for Microsoft Windows, the standard to create an SSH key pair and to SSH into a remote server is to use an open source tool called **PuTTY**.

## Install PuTTY

You can download PuTTY at https://www.chiark.greenend.org.uk/~sgtatham/putty/ and install the compatible version for your Windows machine.

This will install a couple of programs onto your Windows machine.

## Create SSH Keys and add to Cleavr

The first step is to create the SSH keys using the PuTTYgen app.

1. Open PuTTYgen
2. Select **Generate**
3. PuTTY will ask you to get a little exercise in by moving your cursor around the empty portion of the status bar
4. Once the key generates, save the private key to your machine, naming it id_rsa and saving it in a location that you’ll remember where it is
5. Copy all of the public key that is located in the Public key for pasting into OpenSSH authorized_keys file
6. Go to Cleavr > select your profile > click on Key Bank > paste the public key, add a name, and click Add. The key bank is a the perfect spot to store your public key so that you easily apply the key to new servers. Never paste your private key here. The Private key should ONLY be on your device and the public key is ALWAYS what you’ll use for remote servers.
7. Next, go to the server you want to SSH into in Cleavr > select SSH Keys > select the recently added key from the dropdown list, add in the users (root and cleavr are default users and you can assign one or both of them), and then Add key

Your public key is now added to your server! 🎉 

## Use PuTTY to SSH into the server from your Windows device

1. Open the PuTTY app
2. Add the public IP address for your server into Host Name
3. Next, go to connection > SSH > Auth, click on browse and select the id_rsa file you created in the PuTTYgen steps
4. Now, select Open to make the SSH connection
5. The terminal will ask you for a user, type in either `root` or `cleavr` depending on how you added username to the public key you added to your server

Bam! you are now SSH’d into your remote server!

<base-info>
Just to note, you may have tried to use PuTTY to SSH into a Cleavr server without using an SSH key and attempting to use the username and sudo password pair. Cleavr automatically disables this login method in order to encourage good security practices as using the SSH private/public key method is far more secure.
</base-info>

