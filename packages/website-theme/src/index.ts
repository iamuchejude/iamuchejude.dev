import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import link from '@frontity/html2react/processors/link';

import WebsiteTheme from '../types';
import Theme from './components';

const website: WebsiteTheme = {
  name: '@iamuchejude/website-theme',
  roots: {
    theme: Theme,
  },
  state: {},
  actions: {},
  libraries: {
    html2react: {
      processors: [image, iframe, link],
    },
  },
};

export default website;
