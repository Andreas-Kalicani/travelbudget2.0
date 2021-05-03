import Navbar from './components/navigation/navbar';
import {Switch, Route} from "react-router-dom"
import InputForm from "./components/form/InputForm";
import './components/form/InputForm.css'
import Dashboard from './components/dashboard/Dashboard';
import React, {useState} from "react";
import Team from "./components/team/Team"; 



function App() {

  

  return (
    <div>
      
      <Navbar />
      <Switch>
        
        <Route
          exact path="/" 
          render={props =>
            <InputForm 
          
            {...props} />
          }
        />
        <Route
          exact path="/dashboard"
          render={props =>
            <Dashboard 
            
            {...props} />
          }
        />
        <Route
        exact path="/team"
        render={props =>
        <Team/>
        }
        />
        

      </Switch> 
      
    </div>
    
  );
}

export default App;