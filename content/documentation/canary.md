---
title: "Canary"
description: "Canary is your safegaurd for ensuring deployments will be as expected."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video: ""
---

Canary helps you ensure your deployments will be what you expect once they are made live.

Canary has two main functions: Canary hold, which lets you hold a deployment so that you can review it before the deployment goes
live, and Canary stats that show you latency results from global servers.

Canary stats will always display and there is no need to disable.

## Enabling Canary

In the Deployments > Settings > Canary section, click the **Install Canary** button. This will install Canary hold and will create
a unique Canary URL that you can use for testing. You can append the URL with the path to a health directory that will be used
to ping and determine latency and app status. Make sure the path exists; otherwise, Canary will see and display a 404 status.

You can also set the amount, in minutes, that Canary will place a hold on your deployment so that you can run smoke tests during
this time. Keep in mind, the hold minutes leverage cron timing, which begins in the minute. In other words, if you place a two minute
hold, you may have more or less than that in cron time.

While performing smoke tests during Canary hold, you can return to the deployment details page and select **skip and continue**
to continue the deployment. Or, you can select **Cancel** to cancel the deployment if you come across issues during your smoke testing.

To disable Canary, go to the deployment hooks section and disable the Canary deployment hook.
