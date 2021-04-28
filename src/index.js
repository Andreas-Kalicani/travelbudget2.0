import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Theme from "./data/theme";
import { AppProvider } from '../src/context/AppContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
      <Theme>
        <App /> 
      </Theme>
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
