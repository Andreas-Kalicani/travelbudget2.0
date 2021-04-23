import React, { useContext } from "react"; 
import {Doughnut} from "react-chartjs-2"; 
import { AppContext } from '../../../context/AppContext';

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
        
            <Doughnut className="chart2" height={400} width={0} data={{
                labels: ["expenses"], 
                datasets:[{
                    data: [categoryExpense.food, categoryExpense.entertainments, categoryExpense.etc],
                    label: "first dataset", 
                    backgroundColor: ["red", "blue"]
                    
                }]
            }}
            />
    )
}

export default Chart2; 