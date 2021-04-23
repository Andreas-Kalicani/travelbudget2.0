import React, { useContext } from "react"; 
import {Doughnut} from "react-chartjs-2"; 
import { AppContext } from '../../../context/AppContext';
import "./chart2.css"

const Chart2 = (props) => {
    const { expenses } = useContext(AppContext);
    let categoryExpense= expenses.reduce((total, item) => {
    
        if(total[item.category]){
          total[item.category] += item.cost;
        }else{
          total[item.category]= item.cost
        }
        return total;
        }, {})
    return (
           
           <div className="chartnigga">
            <Doughnut 
             options={{responsive: true, maintainAspectRatio: false}} height={50} data={{
                labels: ["expenses", "budget"], 
                datasets:[{
                    data: [categoryExpense.food, categoryExpense.entertainments, categoryExpense.etc],
                    label: "first dataset", 
                    backgroundColor: ["red", "blue"]
                    
                }]
            }}
            />
           </div>
    )
}

export default Chart2; 