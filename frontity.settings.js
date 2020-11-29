const settings = {
  name: "iamuchejude.dev",
  state: {
    frontity: {
      url: "https://iamuchejude.dev",
      title: "Uche Jude",
      description: "Web Frontend Engineer",
    },
  },
  packages: [
    "@iamuchejude/website",
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://iamuchejude.local",
          homepage: "/home/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
