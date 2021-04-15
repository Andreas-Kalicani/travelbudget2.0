import Navbar from './components/navigation/navbar';
import {Switch, Route} from "react-router-dom"
import InputForm from "./components/form/InputForm";
import './components/form/InputForm.css'
import Dashboard from './components/dashboard/Dashboard';
import React, {useState} from "react";


function App() {

  const [inputBudget, setBudget] = useState("") ;
  const [conversionResult, setConversionResult] =useState(0);
  const [originCurrencyCode, setOriginCurrencyCode] =useState("");
  const [destinationCurrencyCode, setDestinationCurrencyCode] =useState("");

  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact path="/" 
          render={props =>
            <InputForm 
            inputBudget={inputBudget} 
            setBudget={setBudget} 
            conversionResult={conversionResult} 
            setConversionResult={setConversionResult}
            originCurrencyCode={originCurrencyCode}
            destinationCurrencyCode={destinationCurrencyCode}
            setOriginCurrencyCode={setOriginCurrencyCode}
            setDestinationCurrencyCode={setDestinationCurrencyCode}
            {...props} />
          }
        />
        <Route
          exact path="/dashboard"
          render={props =>
            <Dashboard 
            inputBudget={inputBudget} 
            conversionResult={conversionResult}
            originCurrencyCode={originCurrencyCode}
            destinationCurrencyCode={destinationCurrencyCode}
            {...props} />
          }
        />
      </Switch> 
    </div>
    
  );
}

export default App;