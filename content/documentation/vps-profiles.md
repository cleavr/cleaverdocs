---
title: "VPS Profiles"
description: "Add VPS profiles to connect virtual private server accounts."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video:
---

<you-tube video="7UGfmjoe17M"></you-tube>

Before you can add a VPS profile, you must first create an account with your cloud provider of choice. You will also
need to create an API token with that provider that you will add to Cleavr to connect your accounts.

## VPS Providers

### [Vultr](https://vultr.grsm.io/cleavr)

Vultr is another option with global options at great prices.

To create a key, go to your **Account > API >** and create a new API key. Make sure you have ‘Allow All IPv4’ enabled.

### [Linode](https://linode.gvw92c.net/7mOMer)

Made with developers in mind, Linode provides several options and server centers around the globe.

To create a key, go to **My Profile > API Tokens > Add a Personal Access Token**. You will need to give the ‘Domains’,
‘Linodes’ and ‘StackScripts’ options Read/Write access.

Wanting to set up your Linode Server to send emails? In an effort to reduce SPAM emails being sent from Linode servers, they
have locked down port 25. [Follow their instructions to request ability to send mail.](https://www.linode.com/docs/guides/running-a-mail-server/#sending-email-on-linode)

### [Hetzner](https://hetzner.cloud/?ref=6UbiqpRc9BFG)

If you are based in Europe, Hetzner has affordable cloud options for you.

To create a key, go to your project that you created > **Access > API Tokens** and generate api token.

The Hetzner integration supports IPv6 in addition to IPv4.

### [UpCloud](https://upcloud.com/signup/?promo=38D8TP)

With a focus on small / medium businesses and with developer productivity in mind, UpCloud is a great VPS provider
for your needs.

When adding an UpCloud profile in Cleavr, you'll simply add your UpCloud login credentials. In your UpCloud account, you'll
need to enable the **Allow API connections** option in your user profile.

### [DigitalOcean](https://m.do.co/c/d32ff825abb2)

DigitalOcean has plenty of global data centers and well-priced options that should meet most needs.

To create a key, go to **API > personal access tokens** and generate a new key

The DNS integration supports IPv6 in addition to IPv4.

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

### [Oracle Cloud](https://www.oracle.com/cloud/)

We have a limited integration with Oracle Cloud. At the moment, our integration allows for provisioning their free VPS server offering.

Connecting to your Oracle Cloud account is quite a bit more involved than with the other VPS providers. Here are the steps:

#### 1. Create an account on oraclecloud.com

To connect to your new Oracle account, we'll need to collect some info in Oracle that we'll use to create a VPS profile in Cleavr. Continue on in Oracle and gather the following:

#### 2. Locate your tenant OCID

Located in the /tenancy section, you can copy the OCID from the Tenancy Information tab.

![](https://docs.cleavr.io/images/oracle/tenant-ocid.png)

#### 3. Locate your user OCID

Under your avatar menu, click on the first link, which is your profile. Copy the OCID from the User Information tab.

![](https://docs.cleavr.io/images/oracle/user-ocid.png)

#### 4. Add a new API key

On your profile page, scroll down to the Resources section and click API Keys and then click the Add API Key button. Generate a new key pair, download the private key to your device, and then click Add and then close the modal.

![](https://docs.cleavr.io/images/oracle/api-keys.png)

Copy the Fingerprint. Open the private key you downloaded to your device and copy all of the contents.

![](https://docs.cleavr.io/images/oracle/region.png)

#### 5. Locate your server region ID

To find the region identifier, click on the region name on the top nav, then click **Manage Regions** on the submenu.

You will see the list of regions you are subscribed to along with the region identifier. Reference the ID for the region in which you'll be provisioning servers under with the VPS Profile you'll be creating in the next step.

![](https://docs.cleavr.io/images/oracle/fingerprint.png)

You can also locate the region id in the URL.

```
https://cloud.oracle.com/?region=us-sanjose-1  // Region ID is us-sanjose-1
```

#### 6. Create Oracle VPS Profile in Cleavr

In Cleavr, add a new VPS Profile and paste the above values into their corresponding sections. Once you've added your Oracle Cloud VPS profile, you can now provision a free Oracle Cloud server!

<base-info>
In the future we may opt to make their paid server plans available as well. 
</base-info>

## Custom

You may connect to a custom, bring your own server, provider so long that the server runs Ubuntu 20.04.

We recommend to use a fresh server and not a server that has existing sites, NGINX, and other web services running on it as they
may interfere with Cleavr.

If you use the custom server setup, please be advised that since this type of connection is not an official integration with your hosting provider, there may some unknowns that may impede certain processes. This typically manifests itself with the default Ubuntu image that hosting providers installs that may not have certain default apts included in their image. If you run across errors during site creation, SSL creation, deployments, etc, keep an eye on the logs for missing package dependencies. You can SSH into the server and install missing packages. Contact Cleavr Support if you get stuck.
