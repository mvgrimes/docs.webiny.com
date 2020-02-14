---
id: add-new-route
title: Add New Route
sidebar_label: Add New Route
---

Hi! This is the 2nd tutorial in the making of Hello World webiny App.

If you have followed the [Create Project](/docs/tutorials/hello-world/create-project) tutorial in the previous section, then you should have a working webiny website on your machine.

In this tutorial, we will learn how to add new pages to our webiny App using Code and the Page Builder

## 1. Using the Code

Create a file named routes under plugins directory `apps/site/src/plugins/routes.js`

Export the route plugin with binding routes to elements like following

```js
import * as React from "react";
import { Route } from "@webiny/react-router";


type RoutePlugin = {
    name: string;
    type: "route";
    route: React.ReactElement;
}

const TestComponent = () => {
	return (
        <div>Test Route Component</div>
    );
};

export default [
    {
        name: "my-route",
        type: "route",
        route: <Route component={TestComponent} path={"/my-route"} />
    }
];


```


Now import this plugin in `index.js` file under plugins `apps/site/src/plugins/index.js`.


After adding this plugin, your file `apps/site/src/plugins/index.js` should look like following:

```js
import pageBuilderPlugins from "@webiny/app-page-builder/site/plugins";
import pageBuilderTheme from "@webiny/app-page-builder-theme";
import pageBuilderUseSsrCacheTagsPlugins from "@webiny/app-page-builder/site/plugins/useSsrCacheTags";
import { fileUploadPlugin, imagePlugin } from "@webiny/app/plugins";
import cookiePolicyPlugins from "@webiny/app-cookie-policy/render";
import typeformPlugins from "@webiny/app-typeform/render";
import mailchimpPlugins from "@webiny/app-mailchimp/render";
import gtmPlugins from "@webiny/app-google-tag-manager/render";
import i18nPlugins from "@webiny/app-i18n/site/plugins";
import formsSitePlugins from "@webiny/app-form-builder/site/plugins";
import formsPbPlugins from "@webiny/app-form-builder/page-builder/site/plugins";
import formBuilderTheme from "@webiny/app-form-builder-theme";
import routes from './routes';

const plugins = [
    fileUploadPlugin(),
    imagePlugin,
    pageBuilderPlugins,
    pageBuilderUseSsrCacheTagsPlugins,
    pageBuilderTheme(),
    cookiePolicyPlugins,
    typeformPlugins,
    mailchimpPlugins,
    gtmPlugins,
    i18nPlugins,
    formsSitePlugins,
    formsPbPlugins,
    routes,
    formBuilderTheme()
];

export default plugins;

```

Now open [http://localhost:3000/my-route](http://localhost:3000/my-route) from your favorite browser and you should see the test component you added for this route.

![Add New Route Page](/img/webiny-apps/tutorial/helloworld/add-new-route-page.png)

## 2. Using the Page Builder

Go to the Page Builder link on the local admin app [http://localhost:3001/page-builder/pages](http://localhost:3001/page-builder/pages)

You should see the following Website on the Browser

![Page Builder](/img/webiny-apps/tutorial/helloworld/cms-page-builder.png)

Click on Plus icon at the bottom right to add a new page

Here you can either create a new category for your page or use the existing static category <br/>
> NOTE: Your page routes are prefixed by the category route that you choose to create the page as shown `/static/` in the picture below


![Page Builder Add Page](/img/webiny-apps/tutorial/helloworld/cms-page-builder-add-page.png)

After hitting the Static you should see the following UI for Editing the Page

![Page Builder Add Page 2](/img/webiny-apps/tutorial/helloworld/cms-page-builder-add-page-2.png)
