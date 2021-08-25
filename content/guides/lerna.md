---
title: 'Deploy a Lerna managed monorepo'
description: 'How to deploy a Lerna managed monorepo with Cleavr.'
image: 'https://docs.cleavr.io/images/lerna.png'
video: ''
---

[Lerna](https://github.com/lerna/lerna#about) is self-described as a "tool that optimizes the workflow around managing multi-package repositories with git and npm."

Multi-package repositories, also known as monorepos, have become a popular way to organize project code bases. 

Lerna not only assists with the organization, but can also be used to streamline building multiple packages, which makes it helpful to use when deploying monorepos using [Cleavr](https://cleavr.io).

## Example Node deployment

In this example, assume NodeJS backend and frontend packages are being used. This is just an example for deploying a NodeJS app monorepo using Lerna and is meant to give you an idea of how you might do the same as well as help troubleshoot issues you may run across. 

### Add a new NodeJS SSR site
Set up a NodeJS SSR site in Cleavr. Once the site is setup, go to the Webapp section and continue setting up the web application. 

<base-info>
When adding the new site, you may need to enter a port number. Many front-end NodeJS frameworks will hard code the port to 3000.
</base-info>

### Configure Web App Build Settings

In `settings > build`, set the Entry Point as `npm` and Arguments as `start`. 

For the PM2 Ecosystem, set the `cwd` path to the front-end package directory. 

```json
{
  "name": "spgtqbeaunctavf6283.cleavr.cloud",
  "script": "npm",
  "args": "start",
  "log_type": "json",
  "cwd": "/home/cleavr/<site-name>/current/<front-end-app-directory>",
  "instances": "max",
  "exec_mode": "cluster",
  "env": {
    "PORT": 3000,
    "CI": 1,
    "NUXT_TELEMETRY_DISABLED": 1
  }
}
```

In this example, the `front-end-app-directory` includes a `package.json` file with the following script: 

```json
"scripts": {
    "start": "npx lerna run start --parallel",
    "build": "npx lerna bootstrap && npx lerna run build"
  },
```

On activation, this will run a chain reaction that will start the front-end and back-end packages. 

Take note of the `--parallel` flag as this will be required to run processes in parallel. 

### Configure Deployment Hooks

You'll need to add some custom deployment hooks as well as disable the `Install NPM Packages` and `Build` hooks. 

#### Add Install Hook

Add the following custom install deployment hook. 

```
cd {{ releasePath }}/<front-end-app-directory>
npx lerna bootstrap
```

#### Add Build Hook

Add the following custom build deployment hook. 

```
cd {{ releasePath }}/<front-end-app-directory>
npx lerna run build
```

#### Add Env Hook

Add the following custom .env link deployment hook. 

```
cd {{ releasePath }}

ENV_SRC_PATH="{{ projectPath }}/.env"
ENV_PATH="{{ releasePath }}/.env"

if [[  -f "$ENV_SRC_PATH" && ! -f "$ENV_PATH" ]]; then
  ln -s "$ENV_SRC_PATH" "$ENV_PATH"
  echo "Successfully linked $ENV_PATH to $ENV_SRC_PATH"
fi
```

#### Order Hooks

Order as follows: 
1. Copy Project
1. Custom Install
1. Custom Build
1. Custom Env Link
1. Activate New Deployment
1. Clean Old Deployments 

### Deploy! 🚀

You show now be good to deploy!

If troubleshooting is needed, check the deployment steps and see if they show any errors. Be sure to look even if they appear successful as sometimes error codes aren't actually returned. As with all NodeJs deployments, check PM2 logs for hints. 

---

We hope this helps with setting up a Lerna managed monorepo for deployment using Cleavr. If you have additional tips you'd like to share, please feel free to submit a PR. 
