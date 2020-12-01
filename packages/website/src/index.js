import link from '@frontity/html2react/processors/link';
import { externalLinks, quest } from './precessors';
import Theme from './components';

const website = {
  name: '@iamuchejude/theme',
  roots: {
    theme: Theme,
  },
  state: {},
  actions: {},
  libraries: {
    html2react: {
      processors: [link, externalLinks, quest],
    },
  },
};

export default website;
