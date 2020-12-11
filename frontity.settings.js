const settings = {
  name: 'iamuchejude.dev',
  state: {
    frontity: {
      url: 'https://iamuchejude.dev',
      title: 'Uche Jude',
      description: 'Web Frontend Engineer',
    },
  },
  packages: [
    '@iamuchejude/website',
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          url: 'https://app-5fba9a04c1ac1813b0e8d78c.closte.com',
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
