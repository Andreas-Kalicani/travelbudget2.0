import React, { useContext } from "react"; 
import {Doughnut} from "react-chartjs-2"; 
import { AppContext } from '../../context/AppContext';
import styled from "styled-components";

const Chartnigga=styled.div`
    margin-top: 10%; 
    height: 200px; 
`

const ChartLeft = () =>{
      const {/*  budget, inputBudget,  */conversionResult, expenses } = useContext(AppContext);  // do we need InputBudget ?
      const totalExpenses = expenses.reduce((total, item)=>{
        return (total += item.cost);
    }, 0);
    let result= conversionResult-totalExpenses
    return (
    // <div>
    //   {/* This is to visually see changes dynamically, lets delete when we are sure it works */}
    //   <p>Budget: {budget} Spent: {totalExpenses}</p> 
    <Chartnigga> 
        <Doughnut className="chart1" height={50} width={0} data = {{
            labels: ["Remaining", "Expenses"], 
        
            datasets: [
                {
                    data: [result, totalExpenses],
                    label: "first dataset", 
                    backgroundColor: ['rgb(54, 162, 235)',  'rgb(255, 99, 132)'],
                
                }
            ], 
        
            options: {
                elements: {
                center: {
                    text: '90%',
                    color: '#FF6384', // Default is #000000
                    fontStyle: 'Arial', // Default is Arial
                    sidePadding: 20, // Default is 20 (as a percentage)
                    minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
                    lineHeight: 25 // Default is 25 (in px), used for when text wraps
                    
                }
                }
            }
            
        }}
        />
    </Chartnigga>
  // </div> {/* Lets forget about this div for now */}

)

    
};



export default ChartLeft;