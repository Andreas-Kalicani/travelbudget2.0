import React from "react"; 
import './App.css';
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
  );
}

export default App;
