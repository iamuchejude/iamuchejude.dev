import { Package } from 'frontity/types';
import Html2React from '@frontity/html2react/types';
import Source from '@frontity/source/types';
import Router from '@frontity/router/types';

interface Website extends Package {
  name: '@iamuchejude/website';
  roots: {
    theme: React.ElementType;
  };
  state: {
    source?: Source['state']['source'];
    router?: Router['state']['router'];
  };
  actions: {
    source?: Source['actions']['source'];
  };
  libraries: {
    html2react: Partial<Html2React['libraries']['html2react']>;
  };
}

export default Website;
