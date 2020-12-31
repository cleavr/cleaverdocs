---
title: 'Access Server Via SSH'
description: 'How to access you server via SSH.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

The most common way to access your server is by ssh.  

<base-info>
If you're a Mac user, SSH access is straightforward. Windows users, view the guide on accessing via PuTTY.
</base-info>

## Add SSH Key to your server

The firs thing to do is create your SSH keys if you don't already have them. 

In your terminal, run the following command: 

```
ssh-keygen -t rsa
```

This will output a private and public key pair in your `/.ssh` directory. 

Add the public key to your server in the [SSH Key](/ssh-keys) section.

## Access your server via SSH

After you setup your SSH key on your device and in Cleavr, you can use the following command on your terminal / command line interface: 

```
ssh cleavr@<server public ip>
```
Replace `<server public ip>` with the public IP for the target server you are SSH'ing into. 

`Cleavr` is the server user added during all server provisionings. You can add an additional [server user](/server-users) to your server
and replace `cleavr` with the created server user to access your server as that user. 

<base-alert>
If you have a server provisioned prior to 30 September 2020, then the username to use us 'cleaver' instead of 'cleavr'.
</base-alert>

## Access your server as root user
In the case where you need to make changes as a root user, you may want to access the server as a root. The 'cleavr'
 user does not have root privileges for security reasons so that the user is not granted too much power. 
 
<base-alert>
 If you need to use root, be sure to be very careful as you might unintentionally make changes that impact your server and how Cleavr interfaces with it. 
</base-alert>

To access, you can ssh into the server via 

```
ssh root@<public server ip> 
```

Or, if you are already accessing your server as 'cleavr', you can change to root by using the following command: 

```
sudo su root
```

And then supply the sudo password when requested. 

## Access via your providers console

Most VPS providers also provide a link to launch the server console from within their interface. This can be another option for you. 
However, be warned. These connections are typically pretty slow. 
