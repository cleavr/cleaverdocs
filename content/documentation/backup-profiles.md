---
title: 'Backup Profiles'
description: 'Add backup profiles to connect cloud storage accounts.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: 
---

You can backup your database and files on a remote SFTP server, Backblaze, Wasabi, AWS S3, Digital Ocean Spaces, or on a local directory on your server.

When adding a new connection, Cleavr will verify the access tokens to ensure Cleavr can connect to your account.  

## [Backblaze](https://www.backblaze.com/)

The following are specific or important to know for Backblaze backups. 

- Application Key ID - enter the key ID for the Backblaze API
- Application Key - enter the key for the Backblaze API
- Bucket - enter the Backblaze bucket name you created (case sensitive)
- Endpoint - enter the endpoint URL for the bucket

## [Wasabi](https://wasabi.com/)

The following are specific or important to know for Wasabi backups. 

- Key - enter the key for the Wasabi API
- Secret - enter the secret for the Wasabi API
- Bucket - enter the  bucket name you created (case sensitive)
- Region - enter the data region that the Wasabi bucket is located

## AWS S3

The following are specific or important to know for S3 backups. 

- Key - enter the key for the user that has appropriate privileges to write to S3 bucket
- Secret - enter the secret for the above identified user
- Bucket - enter the S3 bucket name you created (case sensitive)
- Region - enter the data region that the S3 bucket is located

## DigitalOcean Spaces

The following are specific or important to know for DigitalOcean backups. 

- Key - enter the key for the space
- Secret - enter the secret for the space
- Origin URL - enter the origin URL for the space; this is visible on the main page for your DO space

## SFTP 

To set up an SFTP connection, you will first need to generate a new SSH private / public key pair to use.

```
ssh-keygen -t rsa -b 4096 -C "{enter your email}" -f ~/Desktop/id_rsa_backup
```

The above command when ran on your terminal will generate a new SSH key pair and output files to your desktop for easy access. 

The following are specific or important to know for SFTP backups. 

- Host - enter the public IP or domain for the target SFTP server
- Username - enter the username that Cleavr will use to SFTP into target server
- If target server is Cleavr managed, you will need to add the public key to the target server and assign to a username. 
The username to assign will typically be cleavr by default but may also be a web app user if you are enforcing site isolation. 
- Private key - enter the private key 
- Default Destination Path - enter the default path on the target server that you want backups to be stored
- The username that you use must have access to write to the directory you enter; for example, if using **cleavr** username for a 
Cleavr managed target server, then the path must at least be **/home/cleavr/**
