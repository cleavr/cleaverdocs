---
title: "Using Volume Storage"
description: 'Instructions on how you can hook up your VPS providers volume storage to your Cleavr provisioned server.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

Many of the VPS providers that [Cleavr](https://cleavr.io) integrates with, including DigitalOcean and Hetzner, offer additional
volume storage options. 

You may be interested in leveraging additional storage in several ways. Here are instructions on a couple of setups that you may want to use. 

<base-alert>We suggest that you take a backup of any existing folders you manipulate and proceed with caution as there
are many touch-points where you can accidentally delete files or interfere with Cleavr's connection with your server.</base-alert>

## Swap the `/home` directory to use the mounted volume drive

Cleavr adds sites / web apps to the `/home` directory. It is important that this directory remains stable and existing sub-directories and files
persist as there are control files that Cleavr relies on to work properly with your server. 

<base-alert>
These steps will cause server downtime and any sites and apps being hosted on it will be unavailable while you're setting it up. 
</base-alert>

### Step 1: Add Volume Via Your Provider Account

In your providers account, purchase your volume storage and add to the appropriate server. 

Once created and applied to your server, look for the commands to further configure your server and storage drive. 

In Hetzner, for example, click on the ellipsis to view the configuration options which displays a list of commands to run in your
server's console. 

### Step 2: Prep Your `/home` Directory

We are going to mount the volume drive to the home directory, which means all sites and apps will technically be stored on the 
volume drive. 

First, we want to modify the `/home` directory name to keep the existing files intact. 

SSH into your server, and navigate to the root directory, where `home` is located. 

Run the following command to change the name. 

```bash
mv /home /home2
```

This simply renames the `/home` directory to `/home2`.

### Step 3: Format And Mount Volume Drive

We'll now work off of the formatting and mounting commands provided by the provider. We'll base this example off of
Hetzner's provided commands. You'll want to modify the commands accordingly. 

Run the following commands: 

```bash
sudo mkfs.ext4 -F  /dev/disk/by-id/<volume id>
mkdir /home
mount -o discard,defaults /dev/disk/by-id/<volume id> /home
```
The above formats the drive, creates a new home directory, and mounts the drive to it. Swap out `<volume id>` with the
ID of your Hetzner Volume. 

#### Ensure Your Mount Persists After A Reboot

For some services, such as DigitalOcean, you'll want to ensure that the mounted drive persists after a reboot. Here is an example command to make the mount persist after a reboot: 
```
/dev/disk/by-id/scsi-example /mnt/example-mount-point ext4 defaults,nofail,discard,noatime 0 2
```

### Step 4: Move `/home2` Contents To `/home`

Lastly, we need to copy back the original home files to the new mounted `/home` directory. 

```bash
mv -v /home2/* /home
```

That's it!

Test out the new mounted volume storage drive by ensuring Cleavr can continue to add sites and deploy sites with the new
volume drive. 


## Connect To Volume Drive For Shared Files

You may have a large set of media files that you don't want to keep in Git, don't want on your app server, etc. 

In this example, we'll created a Volume drive that acts as our media storage, and then create a symlink during deployments to 
connect to the folder so that files can be properly served on your site / app. 

### Step 1: Add Volume Via Your Provider Account

In your providers account, purchase your volume storage and add to the appropriate server. 

Once created and applied to your server, look for the commands to further configure your server and storage drive. 

In Hetzner, for example, click on the ellipsis to view the configuration options which displays a list of commands to run in your
server's console. 

### Step 2: Format And Mount Volume Drive

We'll now format and mount using commands provided by the provider. We'll base this example off of
Hetzner's provided commands. You'll want to modify the commands accordingly. 

Run the following commands: 

```bash
sudo mkfs.ext4 -F  /dev/disk/by-id/<volume id>
mkdir /mnt/shared
mount -o discard,defaults /dev/disk/by-id/<volume id> /mnt/shared
```
Above, we are mounting the drive to a shared directory at `/mnt/shared`. Swap out `<volume id>` with the
                                                                         ID of your Hetzner Volume. 

Add your files to this folder using your preferred method, such as SFTP. 

### Step 3: Create A Custom Deployment Hook To Link To Shared Folder

Create a new custom deployment hook for any web app that will use the shared folder location. This will link the app
to the shared folder during deployments. 

```bash
SHARED_DIR=shared

# remove the storage folder if exists
if [ -d "{{ releasePath }}/$SHARED_DIR" ]; then
    echo "Shared directory {{ releasePath }}/$SHARED_DIR is pushed. To make data persists across deployments, removing this directory and linking it to /mnt/$SHARED_DIR instead."
    rm -rf "{{ releasePath }}/$SHARED_DIR"
fi

echo 'Linking the shared folder...'
ln -s "/mnt/$SHARED_DIR" "{{ releasePath }}/$SHARED_DIR"
```
