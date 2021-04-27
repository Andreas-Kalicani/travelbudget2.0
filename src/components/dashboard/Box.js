import React, {useContext} from "react"; 
import { AppContext } from "../../context/AppContext";


const Box = () => {
const {budget, expenses} = useContext(AppContext)
const totalExpenses = expenses.reduce((total, item)=>{
  return (total += item.cost);
}, 0);
    return (
        
        <div className="big-container">
          <div className="box container1">
        <h1>Budget</h1>
        <h1 className="box-text">{budget}</h1>
          </div>  
          <div className="box container2">
          <h1>Expense</h1>
          <h1 className="box-text">{totalExpenses}</h1>
          </div>  
          <div className="box container3">
          <h1>Spent</h1>
          <h1>100</h1>
          </div>  
          <div className="box container4">
          <h1>Daily</h1>
          </div>  
        </div>  
    ); 
}

export default Box; 