const settings = {
  name: "iamuchejude.dev",
  state: {
    frontity: {
      url: "http://localhost:3000",
      title: "Uche Jude",
      description: "Personal Website and Blog"
    }
  },
  packages: [
    'raditian-theme',
    '@frontity/tiny-router',
    '@frontity/html2react',
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: "http://iamuchejude.local/wp-json"
        }
      }
    }
  ]
};

export default settings;
