import React from 'react';
import { Helmet } from 'react-helmet';

const Head: React.FC = () => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;400;700;800;900&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default Head;
