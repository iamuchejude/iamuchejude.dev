import link from '@frontity/html2react/processors/link';
import image from '@frontity/html2react/processors/image';
import Theme from './components';

const website = {
  name: '@iamuchejude/theme',
  roots: {
    theme: Theme,
  },
  libraries: {
    html2react: {
      processors: [link, image],
    },
  },
};

export default website;
