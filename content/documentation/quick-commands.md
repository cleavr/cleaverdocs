---
title: "Quick Commands"
description: "Run quick commands for your web apps."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

## What are Quick Commands?

Quick Commands are like [Quick Scripts](/quick-scripts), but are more application specific.

If you have any periodic scripts that you need to run for your web applications, you can create a Quick Command to run them when you need to and
with just 1-click of a button.

## Laravel Commands

Since Laravel has a relatively standard set of commands that are commonly used for Laravel applications, we have a pre-built list of Laravel commands that are ready to use.

![Laravel Commands](/images/laravel-commands.png)

## Run Quick Commands

Quick Commands can be run in the Quick Script > command tab section as well as in the Deployments > Quick Commands section.

Click on the ellipsis icon and then click **Run now** to run the command.

If you need to run as a different user other than default `cleavr` user, select **Edit and Run** option.

After running the command, you can view the results by expanding the Quick Command row as well as in the flash message that will appear at the top of the page.

![Laravel Commands](/images/run-quick-command-results.png)

## Create a new Quick Command

You may add a new Quick Command from the Quick Scripts section on the main menu as well as in the Quick Command menu in the Deployments seciton.

Click on the **Add New Quick Command** button.

Add a descriptive **Label** for your command and the bash **Script** to run.

You may add in variables and a list of available variables is provided for reference.

Select which **Applicable Web App Types** to use the Quick Command for.

When you're done, select **Add** or **Add and run now**.
