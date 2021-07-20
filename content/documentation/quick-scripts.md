---
title: "Quick Scripts"
description: 'Automate your server management tasks.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What are Quick Scripts? 
Think of Quick Scripts as a way to automate server tasks that you only need to periodically run. This can be used for additional config tweaks
that you typically run after provisioning a new server or periodic tasks that you run for one of your web apps. 

<base-point>
We are currently working on a library of Quick Scripts for common server tasks. We'll post a link here once it's ready.
</base-point>

## Create a new Quick Script
In the Quick Script section, click **Add New Quick Script** to add a new script. 

The new script form is pretty straight forward. The main thing to know is that you'll need to have some familiarity with writing bash/shell scripts. 
There are many [sites on the internet](https://www.google.com/search?q=how+to+write+a+shell+script) that you can find to learn the basics of writing a shell script. 

One handy feature Cleavr offers is the ability to include custom variables, making the scripts even more flexible and reusable. All you need to do is use double curly braces and a variable label that does not include any space. 

For example: 

```
{{ my_variable }}
```

When running the script, you'll be asked to enter the variables you'd like to use for that run. 

You may also include script notes which will be visible at the time you run the script. 
