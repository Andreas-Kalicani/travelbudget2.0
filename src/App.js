
import './App.css';
import Navbar from './componets/navigation/navbar';
import {Switch, Route} from "react-router-dom"
import InputForm from "./componets/form/InputForm";
import './componets/form/InputForm.css'

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
