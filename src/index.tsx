import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import App from './app';

import 'antd/dist/antd.css';

ReactDOM.render(
  <ConfigProvider locale={ruRU}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root'),
);
