---
title: 'Redirects'
description: 'Set up and manage redirects for your sites.'
---

## What is a redirect?
A redirect re-routes an incoming url request to a different url. Cleavr enables you to create redirects at the server level, 
as opposed to the app level, which makes redirects speedier than when they are configured at an app level.

Redirects are used for various reasons, from temporary redirects to point to other pages while a page is being worked on, 
permanent redirects when the URL for a trafficked page is permanently changed to a different URL, or for vanity urls to 
use with marketing materials.

## Adding a redirect
Navigate to the site you want to create a redirect for, select **Redirects** and click **Add Redirect** to add a new one.  

Enter the **From URL** which is the incoming URL request that is being made, add in the **URL** or **URI** to redirect to, select 
whether you want the redirect to be permanent or not, and then select Add to create the new redirect.

## What is a permanent redirect?
A permanent redirect will mark the redirect with code 301, which is a signal to the originator making the request that 
the URL is permanently changed. This may perform several actions depending on the capabilities of the originator, such as: 
update URL to new one specified, caches the new URL, and is an indicator to search engines to update the URLs on file to the new one. 
Try not to mark a redirect as permanent if you plan on it being a temporary change.
