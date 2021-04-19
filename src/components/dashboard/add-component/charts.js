import React from "react"; 
import {Doughnut} from "react-chartjs-2"; 


const Charts = () =>{
    return (
    <Doughnut data = {
        labels: ["My Budget", "Expenses"], 
        datasets: [
            {
                label: "first dataset", 
                backgroundColor: [""]
            }
        ]
    }
  />
)

    
};

export default Charts; 