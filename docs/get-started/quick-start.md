---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

This is a quick start guide which should help you setup Webiny as fast as possible. 

At the end of this guide, you'll have a simple website, that already comes with a couple of default pages to get you started, and a complete admin interface that will enable you to manage it. All of this will be deployed to the AWS Cloud. 

For detailed explanations of concepts and processes, see the [Deep Dive](/docs/deep-dive/project-structure) section of the docs.

## Prerequisites

The following things are mandatory for both local development and production deployments:

✅ **node.js >= 10.14.0**
- we recommend [this tool](https://www.npmjs.com/package/n) to manage your node.js versions

✅ **`yarn` < 2.0**
- [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)
- or your can just run `npm install yarn -g`

✅ **AWS account with an [IAM user for programmatic usage](https://www.youtube.com/watch?v=tgb_MRVylWw)**

✅ **MongoDB database** in the cloud 
- we recommend [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) if don't have a database already
- you can follow [this guide](/docs/other/guides/mongodb-atlas) to create one 

> NOTE: if you're unsure your AWS credentials are configured correctly, you can verify them by running the following command using [AWS CLI](https://aws.amazon.com/cli/): `aws sts get-caller-identity`. If you don't see the user info, take a look at this tutorial to [create an IAM user for programmatic usage](https://www.youtube.com/watch?v=tgb_MRVylWw).

## 1. Install the CLI

```
npm -g install @webiny/cli
```

## 2. Create a new project

```
webiny create my-project
cd my-project
```

## 3. Setup database connection

Edit `.env.json` file in the root of the project and set the `MONGODB_SERVER` value. The values in this file are unique for your project, you do NOT need to change any other values.

> In case you need any help creating a MongoDB cluster on MongoDB Atlas, please follow [this guide](/docs/other/guides/mongodb-atlas).

> IMPORTANT: it's important to give the outside world access to your database because the database will be accessed from your cloud functions, thus you'll never have a fixed IP address. See the [Whitelist Your Connection IP Address](https://docs.atlas.mongodb.com/getting-started/#whitelist-your-connection-ip-address). Make sure you add a `0.0.0.0/0` entry. 

> The `MONGODB_SERVER` value should be in the format of a MongoDB connection string such as: 
>`mongodb+srv://{YOUR_USERNAME}:{YOUR_PASSWORD}@someclustername.mongodb.net`.

## 4. Deploy API

We need to deploy a `local` API environment to use for local development:

```
webiny deploy-api
```

> NOTE: If you run into error: `CredentialsError: Missing credentials in config`, it means you have to configure your [provider credentials here](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md).
If you use multiple AWS profiles, edit `.env.json` to point to the correct profile via `AWS_PROFILE`. webiny does not use the `AWS_PROFILE` env variable. 

## 5. Start `admin` app

Admin app is the administration system for your project; it contains everything you need to manage your content, users, settings, etc.

```
cd apps/admin
yarn start
```

Once started, `admin` app will run an installation wizard to setup the system.

> IMPORTANT: Do NOT go onto the next step until you complete the installation wizard.

## 6. Start `site` app

Site app is an actual website you're creating. It is a single page app, but in production it renders via server-side rendering.

```
cd apps/site
yarn start
```

---

This is it! You have deployed a `local` API environment, and can begin developing your React apps on your local machine. For deploys to production and other environments, please see the next page.
