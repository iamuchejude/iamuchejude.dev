const settings = {
  name: 'iamuchejude.dev',
  state: {
    frontity: {
      url: 'https://iamuchejude.dev',
      title: 'Uche Jude',
      description: 'Frontend Engineer',
    },
  },
  packages: [
    '@iamuchejude/website',
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          url: 'http://localhost:10000/',
          homepage: '/home',
          postsPage: '/writing',
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
  ],
};

export default settings;
