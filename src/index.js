import React from 'react';
import ReactDOM from 'react-dom';
import { HoiPoiProvider } from 'hoi-poi-ui';
import App from './App';

import './index.scss';

ReactDOM.render(
  <HoiPoiProvider>
    <App />
  </HoiPoiProvider>,
  document.getElementById('root'),
);
