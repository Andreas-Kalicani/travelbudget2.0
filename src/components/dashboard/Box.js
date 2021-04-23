import React, {useContext} from "react"; 
import { AppContext } from "../../context/AppContext";


const Box = () => {
const {budget, expenses, totalExpenses} = useContext(AppContext)
    return (
        
        <div className="big-container">
          <div className="box container1">
        <h1>Budget</h1>
        <h1 className="box-text">{budget}</h1>
          </div>  
          <div className="box container2">
          <h1>Expense</h1>
          <h1 className="box-text">{expenses}</h1>
          </div>  
          <div className="box container3">
          <h1>Spent</h1>
          <h1>{totalExpenses}</h1>
          </div>  
          <div className="box container4">
          <h1>Daily</h1>
          </div>  
        </div>  
    ); 
}

export default Box; 