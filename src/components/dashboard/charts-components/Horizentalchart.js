import React from "react";
import {HorizontalBar} from "react-chartjs-2";
import "./horizontal.css"; 
const Horizontalchart = () =>{
{/* Will try to get output from the expense to show  from each categories the expense have been used and
 will be displayed through the horizontal chart */}

 
    return (
        <div className="horizontal">
       <HorizontalBar 
       data = {{
           labels: ["Entertainment", "Food", "Travels", "Others"],
           datasets: [
               {
                   label: "The data of my Expenses", 
                   backgroundColor: ["#ea5455", "#7367f0", "#f55555", "#e80505"], 
                   data: [65, 59, 79, 40]
               }
           ]
       }}
       />
      </div>
    )
}

export default Horizontalchart; 