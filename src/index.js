import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Theme from "./data/theme";
import FormProvider from "./context/FormProvider"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FormProvider>
      <Theme>
        <App /> 
      </Theme>
    </FormProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
