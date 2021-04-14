import React from "react"; 
import './App.css';
import Navbar from './components/navigation/navbar';
import {Switch, Route} from "react-router-dom"
import InputForm from "./components/form/InputForm";
import './components/form/InputForm.css'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact path="/"
          render={props =>
            <InputForm {...props} />
          }
        />  
      </Switch> 
    </div>
  );
}

export default App;
