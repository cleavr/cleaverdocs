---
title: 'Deployment Hooks'
description: 'Deployment hooks allow you to basically do whatever you want with your server.'
image: 'https://docs.cleavr.io/images/newsite.png'
video: ''
---

## What is a deployment hook?
Deployment hooks are actions, or steps, in the deployment process. According to the type of site you set up, default 
hooks are provided to be able to, at minimum, deploy a basic site of the configured site type. The more complex your app, 
the more likely you will want to create customized hooks to support your deployment process. For example, maybe you want to 
backup your database before you make changes to it during the deployment process, you can write a script to do that and enable 
it with a deployment hook.

<base-info>
Deployment Hooks use bash scripts. Honestly, you can essentially do whatever you want with a custom deployment hook. The possibilities are endless. 
Just be careful! 😃
</base-info>

## Configure and order deployment hooks
A set of deployment hooks are automatically configured depending on the site type. Hooks with a closed lock cannot be modified or re-ordered.

Hooks with the grip icons may be reordered to the order you want the hooks to run during deployment. During deployment, 
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

## Default Deployment Hooks
The following are scripts that run with the default hooks. 

### For Alpas
#### Build Project

```shell script
cd "{{ releasePath }}/repo"

{% include './_gradle_cleanup.peb' %}

{{ releasePath }}/repo/gradlew build -x test -p {{ releasePath }}/repo
```

 
#### Install Yarn Packages

```shell script
cd "{{ releasePath }}"/repo
yarn install
```
 
#### Migrate Database

```shell script
chmod +x ./alpas
    ./alpas db:migrate
```

#### Make Fat Jar
```shell script
cd "{{ releasePath }}/repo"
{{ releasePath }}/repo/gradlew shadowJar
mv ./app.jar ../
```

### For Laravel / PHP
#### Install Composer Dependencies

```shell script
cd "{{ releasePath }}"
composer install --no-dev --no-ansi
```
 
#### Install Composer Dev Dependencies

```shell script
cd "{{ releasePath }}"
composer install --no-ansi
```
 
#### Install Yarn Packages

```shell script
cd "{{ releasePath }}"
yarn install
```
 
#### Build Cache

```shell script
cd "{{ releasePath }}"
php artisan config:cache
php artisan route:cache
```

#### Migrate Database

```shell script
cd {{ releasePath }}
ln -s "{{ projectPath }}/.env" "{{ releasePath }}/.env"
php artisan migrate --force
```
 

## Library
This an a library of example custom deployment hooks you may want to use.

### NPM Install

```shell script
cd {{ releasePath }} 
npm install
```
 

### For Alpas apps
#### Seed Database

```shell script
cd {{ releasePath }}
chmod +x ./alpas
./alpas db:seed
```
