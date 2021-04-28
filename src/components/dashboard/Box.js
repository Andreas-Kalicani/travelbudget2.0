import React, {useContext} from "react"; 
import { AppContext } from "../../context/AppContext";
import styled from 'styled-components';


const BoxWrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  margin-top: 5%; 
    
`
const BoxDisplayer = styled.div`
  width: 30% !important;
  height: auto; 
  margin:20px;
  border: 2px solid grey; 
  box-shadow: ${props=>props.theme.boxShadow}; /* 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);  */
  text-align: center;
  border-radius: 11px; 
    
`


const Box = () => {
const {conversionResult, expenses,days} = useContext(AppContext)
const totalExpenses = expenses.reduce((total, item)=>{
  return (total += item.cost);
}, 0);

    return (
        
      <BoxWrapper>
          <BoxDisplayer>
            <h3>Budget</h3>
             <h3 className="box-text">{conversionResult}</h3>
          </BoxDisplayer>  
          <BoxDisplayer>
            <h3>Expense</h3>
            <h3 className="box-text">{totalExpenses}</h3>
          </BoxDisplayer>  
          <BoxDisplayer>
            <h3>Remaining</h3>
            <h3>{(Math.round((conversionResult-totalExpenses)*100)/100)}</h3>
          </BoxDisplayer>  
          <BoxDisplayer>
            <h3> Budget for Daily Expenses</h3>
            <h3>{(Math.round((conversionResult/days)*100)/100)}</h3>
          </BoxDisplayer>  
      </BoxWrapper>  
    ); 
}

export default Box; 