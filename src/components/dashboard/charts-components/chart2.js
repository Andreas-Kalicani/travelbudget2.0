import React from "react"; 
import {Doughnut} from "react-chartjs-2"; 
import "./chart2.css"

const Chart2 = (props) => {
    return (
           
           <div className="chartnigga">
            <Doughnut 
             options={{responsive: true, maintainAspectRatio: false}} height={50} data={{
                labels: ["expenses", "budget"], 
                datasets:[{
                    data: [90, 10],
                    label: "first dataset", 
                    backgroundColor: ["red", "blue"]
                    
                }]
            }}
            />
           </div>
    )
}

export default Chart2; 