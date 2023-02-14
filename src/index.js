import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './styles/GlobalStyles';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/list' element={<ListPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
