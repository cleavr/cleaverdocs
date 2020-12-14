---
title: 'Deploy a Quasar SSR App'
description: 'Deploy a Quasar SSR app with Cleavr.'
---

<you-tube video="ierMKUKQ0b4"></you-tube>

## For flash deployment mode
1. Select NodeJS SSR as app type
2. Set Entry Point to `index.js`
3. Leave Arguments empty
4. Set Build Command to `npx quasar build --mode ssr`
5. Set Artifact Path to `dist/ssr`
6. Fill out the remainder of options for your app and deploy!

## For adding new sites and web apps
1. Add a new site to your server, selecting `NodeJS SSR` as app type
2. In Web App Settings:
3. Set Entry Point to `index.js`
4. Leave Arguments empty
5. Set Build Command to `npx quasar build --mode ssr`
6. Set Artifact Path to `dist/ssr`
7. Then, deploy!

If your code is in GitHub, enable GitHub Actions integration for your web app to build your project using GitHub and to 
keep your server resources freed up for your users.
