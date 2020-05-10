import * as React from 'react';
import * as ReactDom from 'react-dom';

import Settings from './components/Settings';

ReactDom.render(
  <React.StrictMode>
    <Settings />
  </React.StrictMode>,
  document.getElementById('root'),
);
