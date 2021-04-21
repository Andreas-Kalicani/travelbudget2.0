import React from "react"; 
import {Doughnut} from "react-chartjs-2"; 


const Charts = (props) =>{
  
    return (
        
    <Doughnut className="chart1" height={50} width={0} data = {{
        labels: ["My Budget", "Expenses"], 
       
        datasets: [
            {
                data: [90, 10],
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

)

    
};

export default Charts; 


