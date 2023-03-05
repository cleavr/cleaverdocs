---
title: "Notification Profiles"
description: "Add notification profiles to connect notification accounts."
image: "https://docs.cleavr.io/images/cleavr-twitter.png"
video:
---

## Slack

Enter a name and the webhook URL for Slack.

[Here are instructions for creating a Slack webhook to use with Cleavr](https://api.slack.com/messaging/webhooks)

## Discord

Enter a name and the webhook URL for Discord.

[Here are instructions for creating a Discord webhook to use with Cleavr](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

## Email

Enter a valid email address for Email.

## Telegram

In order to use Telegram notifications in Cleavr, you must first obtain a Bot Token and Chat ID.

Before setting up a Telegram notification profile in Cleavr, make sure that you have started a conversation with your bot.

### How to create a Telegram bot?

1. In Telegram search for `@BotFather` and select the account with a blue tick mark.
2. Click `start` or send `/start` to `@BotFather`.
3. Type `/newbot` command to create a new bot.
4. Choose name for your bot.

### Where can I find Telegram bot token?

Telegram bot token can be found in conversation with `@BotFather`. Once you create a bot, the `@BotFather` will
respond with a token to access the HTTP API.

### Where can I find my channel's chat ID?

If you want the notifications to be delivered in the bot's messages, you'll not be requireed to provide the chat ID.
If you want the notifications to be delivered in Telegram Channels, you need to provide a chat ID of the channel.

Your Telegram channel's chat ID can be obtained from the `url` of your channel.

If your channel URL is: `https://web.telegram.org/z/#-1637744345`

Grab `1637744345` from the URL and prepend `-100`. Your channel ID will be `-1001637744345`.

Make sure to add the bot to your channel and assign administration privileges.
