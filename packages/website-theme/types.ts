import { Package } from 'frontity/types';
import Html2React from '@frontity/html2react/types';

interface Website extends Package {
  name: '@iamuchejude/website-theme';
  roots: {
    theme: React.ElementType;
  };
  state: {};
  actions: {};
  libraries: {
    html2react: Partial<Html2React['libraries']['html2react']>;
  };
}

export default Website;
