---
title: 'VPS Profiles'
description: 'Add VPS profiles to connect virtual private server accounts.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: 
---

<you-tube video="7UGfmjoe17M"></you-tube>

Before you can add a VPS profile, you must first create an account with your cloud provider of choice. You will also 
need to create an API token with that provider that you will add to Cleavr to connect your accounts.

## VPS Providers 

### [AWS](https://aws.amazon.com/)
Amazon Web Services is one of the largest cloud providers in the world. If you are looking for servers that scale with demand, 
then AWS is a great choice.

For AWS, you will need an Access Key and the Secret key to create the profile in Cleaver.

To create the keys in AWS, go to **Identity and Access Management (IAM) > Your Security Credentials > Access keys**.

<base-alert>
This will create a root access key which gives users full access to your account. If you would like to provide more 
granular access, you can create a new user under the IAM section and then apply the <b>AmazonEC2FullAccess</b> policy to the user 
and then use the provided access key and secret key for that user role. 
</base-alert>

### [DigitalOcean](https://www.digitalocean.com/)

DigitalOcean has plenty of global data centers and well-priced options that should meet most needs.

To create a key, go to **API > personal access tokens** and generate a new key.

### [Hetzner](https://www.hetzner.com/)

If you are based in Europe, Hetzner has affordable cloud options for you.

To create a key, go to your project that you created > **Access > API Tokens** and generate api token.

### [Linode](https://www.linode.com/)

Made with developers in mind, Linode provides several options and server centers around the globe.  

To create a key, go to **My Profile > API Tokens > Add a Personal Access Token**. You will need to give the ‘Domains’, 
‘Linodes’ and ‘StackScripts’ options Read/Write access.

Wanting to set up your Linode Server to send emails? In an effort to reduce SPAM emails being sent from Linode servers, they
have locked down port 25. [Follow their instructions to request ability to send mail.](https://www.linode.com/docs/guides/running-a-mail-server/#sending-email-on-linode)

### [UpCloud](https://upcloud.com/)

With a focus on small / medium businesses and with developer productivity in mind, UpCloud is a great VPS provider
for your needs. 

When adding an UpCloud profile in Cleavr, you'll simply add your UpCloud login credentials. In your UpCloud account, you'll
 need to enable the **Allow API connections** option in your user profile. 

### [Vultr](https://www.vultr.com/)

Vultr is another option with global options at great prices.

To create a key, go to your **Account > API >** and create a new API key. Make sure you have ‘Allow All IPv4’ enabled.
