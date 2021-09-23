---
title: 'Deployment Hooks'
description: 'Deployment hooks allow you to basically do whatever you want with your server.'
image: 'https://docs.cleavr.io/images/cleavr-twitter.png'
video: ''
---

## What is a deployment hook?
Deployment hooks are actions, or steps, in the deployment process. According to the type of site you set up, default 
hooks are provided to be able to, at minimum, deploy a basic site of the configured site type. The more complex your app, 
the more likely you will want to create customized hooks to support your deployment. For example, maybe you want to 
backup your database before you make changes to it during the deployment process, you can write a script to do that and enable 
it with a deployment hook.

<base-info>
Deployment Hooks use bash scripts. Honestly, you can essentially do whatever you want with a custom deployment hook. The possibilities are endless. 
Just be careful! 😃
</base-info>

## Configure and order deployment hooks
A set of deployment hooks are automatically configured depending on the app type. 

Hooks with the active-state grip icons may be reordered to the order you want the hooks to run during deployment. During deployment, 
the order of operations is from the top hook to run first, and then run sequentially until the last hook.

Select a hook to configure which server(s) the hook process should run on. You can also disable a hook from running during a 
deployment by disabling it.

## Add a deployment hook
1. Select **Add Hook**
2. Add a **name** to refer to the hook as
3. Add the **Bash Script** that will run when the hook is called during deployment
4. Select which **servers** to run the hook on
5. Select **Add** to create the new hook.

A list of available variables is displayed at the bottom of the page when adding a new hook.

## Tips

- Make use of the list of variables displayed at the bottom of the new hooks page
- Use `{{ releasePath }}` to point to what will become the current directory 

## Deployment Hooks Library

[Check out the deployment hook library on GitHub.](https://github.com/cleavr/quick-scripts/tree/master/hooks)

Feel free to send us a PR if you'd like to add a helpful deployment hook to share with others. 
