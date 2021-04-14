import React from "react"; 
import './App.css';
<<<<<<< HEAD
import Navbar from './componets/navigation/navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { MdDashboard } from '../node_modules/react-icons/md';
import Dashboard from "./pages/Dashboard";


function App() {
  return (
  <>
  <Router>
   < Navbar />
   <Switch>
     <Route path="/" exact />
     <Route path="/dashboard" component={Dashboard} />
     </Switch>
   </Router>
    </>
=======
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
>>>>>>> 64813632655c07769842ef89621716e98195a944
  );
}

export default App;
