module.exports = {
    "docs": {
        "Webiny": [
            "webiny/introduction"
        ],
        "Get Started": [
            "get-started/quick-start",
            "get-started/going-live",
            "get-started/development-principles"
        ],
        "Deep Dive": [
            "deep-dive/project-structure",
            "deep-dive/cloud-architecture",
            "deep-dive/plugins-crash-course"
        ],
        "API Development": [
            "coming-soon",
            /*"api-overview",
             "api-schema-plugin",
             "api-schema-test",*/
    ],
    'App Development': ['coming-soon'],
    Plugins: [
      'plugins/introduction',
      // add your plugin page below, make sure it's ordered alphabetically
    ],
    Other: [
        {
            type: 'category',
            label: 'FAQ',
            items: ['other/faq/how-is-webiny-serverless'],
        },
      {
        type: 'link',
        label: 'How To Contribute',
        href: 'https://github.com/webiny/webiny-js/blob/master/CONTRIBUTING.md',
      },
    ],
  },
};
