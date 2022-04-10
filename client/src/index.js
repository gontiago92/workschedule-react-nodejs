// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Global Stylesheet
import './index.sass';

// Components and pages
import App from './App'
import Calendar from './components/myTheme/Calendar'
import Login from './pages/Login';
import NotFound from './pages/NotFound'
import About from './pages/About';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Calendar />} />
          <Route path='login' element={<Login />} />
          <Route path='about' element={<About />} />
        </Route> 
        <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);