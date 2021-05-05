import React, {useContext} from "react"; 
import { AppContext } from "../../context/AppContext";
import styled from 'styled-components';


const BoxWrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  margin: 5%; 
  width:100%;
    
`

const BoxDisplayer = styled.div`
  width:22%;
  height: auto;
  padding-bottom:20px; 
  margin:20px;
  
  box-shadow: ${props=>props.theme.boxShadow}; /* 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);  */
  text-align: center;
  border-radius: 11px; 
    
`
const BoxTitle = styled.h3`
  margin-bottom:20px;
  background-color: #eee;
  padding:20px;
    
`
const Green= styled.h3`
  color:#68B455;
    
`

const Red= styled.h3`
  color:${props=>props.theme.colors.red}; 
    
`
const Box = () => {
const {conversionResult, expenses,days, destinationCurrencyCode} = useContext(AppContext)
const totalExpenses = expenses.reduce((total, item)=>{
  return (total += item.cost);
}, 0);
let result=(Math.round((conversionResult-totalExpenses)*100)/100)

    return (
        
      <BoxWrapper>
          <BoxDisplayer>
            <BoxTitle>Budget</BoxTitle>
            <h3>{conversionResult} {destinationCurrencyCode}</h3>
          </BoxDisplayer>  
          <BoxDisplayer>
            <BoxTitle>Expense</BoxTitle>
            <Red>{totalExpenses} {destinationCurrencyCode} </Red>
          </BoxDisplayer>  
          <BoxDisplayer>
            <BoxTitle>Remaining</BoxTitle>
            {result >= 0 ? <Green>{result} {destinationCurrencyCode}</Green>: <Red>{result} {destinationCurrencyCode}</Red>}
          </BoxDisplayer>  
          <BoxDisplayer>
            <BoxTitle> Daily Budget</BoxTitle>
            <h3>{(Math.round((conversionResult/days)*100)/100)} {destinationCurrencyCode}</h3>
          </BoxDisplayer>  
      </BoxWrapper>  
    ); 
}

export default Box; 