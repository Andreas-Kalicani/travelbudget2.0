import Navbar from './components/navigation/navbar';
import {Switch, Route} from "react-router-dom"
import InputForm from "./components/form/InputForm";
import './components/form/InputForm.css'
import Dashboard from './components/dashboard/Dashboard';
import React, {useState} from "react";
import Team from "./components/team/Team"; 


function App() {

  const [inputBudget, setBudget] = useState("") ;
  const [conversionResult, setConversionResult] =useState(0);
  const [originCurrencyCode, setOriginCurrencyCode] =useState("");
  const [destinationCurrencyCode, setDestinationCurrencyCode] =useState("");
  const [days, setDays] =useState("");
  const [budgetNameText, setsBudgetName] = useState('Trip to Berlin')
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact path="/" 
          render={props =>
            <InputForm 
            budgetNameText={budgetNameText}
            setsBudgetName={setsBudgetName}
            inputBudget={inputBudget} 
            setBudget={setBudget} 
            conversionResult={conversionResult} 
            setConversionResult={setConversionResult}
            originCurrencyCode={originCurrencyCode}
            destinationCurrencyCode={destinationCurrencyCode}
            setOriginCurrencyCode={setOriginCurrencyCode}
            setDestinationCurrencyCode={setDestinationCurrencyCode}
            setDays={setDays}
            days={days}
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
            days={days}
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