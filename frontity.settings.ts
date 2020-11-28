import { Settings } from 'frontity/types';

const settings: Settings = {
  name: 'iamuchejude.dev',
  state: {
    frontity: {
      url: 'https://iamuchejude.dev',
      title: 'Website',
      description: "Jude's website",
    },
  },
  packages: [
    { name: '@iamuchejude/website-theme' },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          url: 'http://iamuchejude.local',
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
  ],
};

export default settings;
