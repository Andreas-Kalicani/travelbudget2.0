import React from "react"; 
import "./BoxChart.css"
import Chart2 from "./charts-components/chart2";
import Charts from "./charts-components/charts"; 


const ChartBox= () => {
    return (
        <div className="chartContainer">
            <div className="chart box1"> 
            <div className="text-boxing"><h3>Budget Expense</h3></div>
            <Chart2 className="chart2" height={500} width={100} />
            </div>
            <div className="chart box2">
            <div className="text-boxing"><h3>Expense</h3></div>
              <Charts/>
             </div>
            </div>

    )
}
export default ChartBox; 

