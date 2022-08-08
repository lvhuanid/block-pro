import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { message } from 'antd';
import './index.css';
import App from './App';
import "swiper/css/bundle";

message.config({
  maxCount:2
})
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);
