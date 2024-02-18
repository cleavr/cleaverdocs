---
title: "Cloudflare Proxy IPs"
description: "How to work with Cloudflare Proxy IPs"
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

[Cloudflare](https://www.cloudflare.com/) offers many features that help you secure your web properties.

One such protection mechanism Cloudflare offers is to proxy requests for Cloudflare managed domains.

Though the benefits of obscuring your origin server's IP address to the public is useful, it also prevents you from directly
directly accessing requester IPs. In which case, you may want to know the IP address for some requesters in order
to block access to them if they are being malicious, for instance.

Luckily, Cloudflare offers [proxy IP mapping](https://support.cloudflare.com/hc/en-us/articles/200170786-Restoring-original-visitor-IPs-logging-visitor-IP-addresses#12345681) that we can use in conjunction with NGINX's `real_ip` module to collect the originator IP from the request header.

## Setup

The setup is easy as Cleavr enables `real_ip` by default.

Depending on if you need the mapping for a single site or for all sites on your server, you can set up the
configuration in one of the follow ways.

### Per site

On a site-by-site basis, go to the site you want to enable the mapping for, go to the **Settings** section and
click on **NGINX Configs**.

Directly after the `access_log` declaration, add in the mappings.

You can pull the latest list from Cloudflare. Here is the most recent list at the time of this writing.

```
# CloudFlare proxy addresses.
# Do not modify this list. If you believe the CloudFlare proxy address list is
# out of date, please contact support@serverpilot.io.
set_real_ip_from    103.21.244.0/22;
set_real_ip_from    103.22.200.0/22;
set_real_ip_from    103.31.4.0/22;
set_real_ip_from    104.16.0.0/12;
set_real_ip_from    108.162.192.0/18;
set_real_ip_from    131.0.72.0/22;
set_real_ip_from    141.101.64.0/18;
set_real_ip_from    162.158.0.0/15;
set_real_ip_from    172.64.0.0/13;
set_real_ip_from    173.245.48.0/20;
set_real_ip_from    188.114.96.0/20;
set_real_ip_from    190.93.240.0/20;
set_real_ip_from    197.234.240.0/22;
set_real_ip_from    198.41.128.0/17;
set_real_ip_from    2400:cb00::/32;
set_real_ip_from    2405:b500::/32;
set_real_ip_from    2606:4700::/32;
set_real_ip_from    2803:f800::/32;
set_real_ip_from    2c0f:f248::/32;
set_real_ip_from    2a06:98c0::/29;
real_ip_header      X-Forwarded-For;
```

Click on **Update**.

You can now use `real_ip_header` to handle the requesting IP.

### Server wide

If you want the mapping to be available for all sites, then simply go to the server > services section, click
on NGINX settings (the wrench icon) and then paste the list into the text area and click **Update**.

## Usages

As mentioned above, you can use `real_ip_header` to capture the real IP.

Also, you may want to block access to all IPs except for a few. For this, you can do something like:

```
location ~* /subdirectory {
    allow 1.2.3.4;
    deny all;
}
```

Replace `1.2.3.4` with a real IP you want to allow. The mapping will also allow you to use real IPs in this way
as opposed to only trapping the Cloudflare proxy IP in this use case.
