import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
      <ScrollToTop />
       <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


