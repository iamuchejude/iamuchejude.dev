const settings = {
  name: "iamuchejude.dev",
  state: {
    frontity: {
      url: "http://localhost:3000",
      title: "Raditian",
      description: "Raditian Theme"
    }
  },
  packages: [
    'raditian-theme',
    '@frontity/tiny-router',
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
