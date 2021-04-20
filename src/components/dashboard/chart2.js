import React from "react"; 
import {Doughnut} from "react-chartjs-2"; 

const Chart2 = (props) => {
    return (
        
            <Doughnut className="chart2" height={400} width={0} data={{
                labels: ["expenses"], 
                datasets:[{
                    data: [90, 10],
                    label: "first dataset", 
                    backgroundColor: ["red", "blue"]
                    
                }]
            }}
            
            />

        
    )
}

export default Chart2; 