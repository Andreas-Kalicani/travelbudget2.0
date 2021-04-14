
import './App.css';
import Navbar from './components/navigation/navbar';
import {Switch, Route} from "react-router-dom"
import InputForm from "./components/form/InputForm";
import './components/form/InputForm.css'
import AddComponent from './components/dashboard/add-component/AddComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route
          exact path="/dashboard"
          render={props =>
            <AddComponent {...props} />
          }
        />
      </Switch> 
    </div>
    
  );
}

export default App;
