---

title: 'Providers'
description: 'Add provider profiles to connect to your VPS, VC, backup, DNS, and communication accounts.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: 'https://youtu.be/7UGfmjoe17M'

---


Cleavr is a server management console that connects multiple process flows together. For a fluid experience, we offer integrations with 
multiple VPS, VC, DNS, storage, and communication providers.  

Manage your various providers in the **Provider** section of Cleavr.

The main provider to connect with to get the ball rolling the quickest is the Virtual Private Server (VPS) Provider. You may
also know them by cloud provider, hosting provider, and other similar names. 

## VPS Profiles

<you-tube video="7UGfmjoe17M"></you-tube>

Before you can add a VPS profile, you must first create an account with your cloud provider of choice. You will also 
need to create an API token with that provider that you will add to Cleavr to connect your accounts.

### VPS Providers 

#### [AWS](https://aws.amazon.com/)
Amazon Web Services is one of the largest cloud providers in the world. If you are looking for servers that scale with demand, 
then AWS is a great choice.

For AWS, you will need an Access Key and the Secret key to create the profile in Cleaver.

To create the keys in AWS, go to **Identity and Access Management (IAM) > Your Security Credentials > Access keys**.

<base-alert>
This will create a root access key which gives users full access to your account. If you would like to provide more 
granular access, you can create a new user under the IAM section and then apply the <b>AmazonEC2FullAccess</b> policy to the user 
and then use the provided access key and secret key for that user role. 
</base-alert>

#### [DigitalOcean](https://www.digitalocean.com/)

DigitalOcean has plenty of global data centers and well-priced options that should meet most needs.

To create a key, go to **API > personal access tokens** and generate a new key.

#### [Hetzner](https://www.hetzner.com/)

If you are based in Europe, Hetzner has affordable cloud options for you.

To create a key, go to your project that you created > **Access > API Tokens** and generate api token.

#### [Linode](https://www.linode.com/)

Made with developers in mind, Linode provides several options and server centers around the globe.  

To create a key, go to **My Profile > API Tokens > Add a Personal Access Token**. You will need to give the ‘Domains’, 
‘Linodes’ and ‘StackScripts’ options Read/Write access.

#### [Vultr](https://www.vultr.com/)

Vultr is another option with global options at great prices.

To create a key, go to your **Account > API >** and create a new API key. Make sure you have ‘Allow All IPv4’ enabled.

## VC Profiles

These are your git repository accounts; such as, GitHub, GitLab, and Bitbucket. Cleavr connects to your VC profile to 
pull the code so that Cleavr can build and deploy your app. 🚀

### VC Providers

#### [GitHub](https://github.com/)

One of the best known Git management providers, GitHub has great options for solo accounts and team accounts. 
They do have a [20 web hook limit](https://developer.github.com/webhooks/) per repository; though, you will likely never need that many web hooks associated 
with any one repository.

For NodeJS based apps, including AdonisJS and NuxtJS, Cleavr also offers an itegration with GitHub Actions so that you can
use their services to build your apps. Best yet, all you have to do is click a button to enable and Cleavr gets all the basics 
done for you, no extra configuration required. 

#### [GitLab](https://gitlab.com/)

GitLab is another great git repository provider and is perfect for teams and solo devs.

#### [Bitbucket](https://bitbucket.org/)

Bitbucket is a product of Atlassian and as such, integrates well with their other line of products such as JIRA.

## DNS Profiles

We try to keep everything a click away in Cleavr. This includes bringing in DNS record management. This makes setting up
domains for your sites zoom! 🏎

### DNS Providers

#### [Cloudflare](https://www.cloudflare.com/)

Cloudflare is a web infrastructure and security tool that assists with many valuable services such as DNS record management, 
DDoS mitigation, SSL certificate creation and management, and much more. Cloudflare is a great service to use in conjunction 
with Cleavr if you are looking for even more layers of protection. 

In your Cloudflare account, grab your API Key from your **Profile > API Tokens > View Global API Key** (or create a new one)

#### [DigitalOcean](https://www.digitalocean.com/)

DigitalOcean also provides some DNS record management functions. If you already have DO setup as a VPS provider, you can 
use the same **Personal Access Token** to setup the DNS records connection. 

You will need to ensure that your [domain points to DigitalOcean's nameservers](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars). 

## Backup Profiles
You can backup your database and files on a remote SFTP server, AWS S3, Digital Ocean Spaces, or on a local directory on your server. 

### SFTP 

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

### AWS S3

You must have an AWS account and have a bucket created in S3. Also, you must have a user that has full access S3 
created and the key and secret available. 

The following are specific or important to know for SFTP backups. 

- Key - enter the key for the user that has appropriate privileges to write to S3 bucket
- Secret - enter the secret for the above identified user
- Bucket - enter the S3 bucket name you created (case sensitive)
- Region - enter the data region that the S3 bucket is located

### DigitalOcean Spaces

You must have a DigitalOcean account with Spaced enabled. When you create a space, you will then be able to create an API 
access key and secret for the space. 

The following are specific or important to know for SFTP backups. 

- Key - enter the key for the space
- Secret - enter the secret for the space
- Origin URL - enter the origin URL for the space; this is visible on the main page for your DO space

## Notification Profiles

### Slack

Enter a name and the webhook URL for Slack. 

[Here are instructions for creating a Slack webhook to use with Cleavr](https://api.slack.com/messaging/webhooks) 
