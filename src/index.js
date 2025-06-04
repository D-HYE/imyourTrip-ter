import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Tripter from './Tripter';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './scss/header.scss'
import './scss/footer.scss'
import './scss/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Tripter />
  </BrowserRouter>
);

