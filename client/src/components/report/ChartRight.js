import React, { useContext } from "react"; 
import {Doughnut} from "react-chartjs-2"; 
import { AppContext } from '../../context/AppContext';
import styled from "styled-components";

const Chartnigga=styled.div`
    margin-top: 10%; 
    height: 200px; 
`

const ChartRight = () => {
    // const { expenses } = useContext(AppContext);
    // let categoryExpense= expenses.reduce((total, item) => {
    
    //     if(total[item.category]){
    //       total[item.category] += item.cost;
    //     }else{
    //       total[item.category]= item.cost
    //     }
    //     return total;
    //     }, {})
    return (
           
           <Chartnigga>
            <Doughnut 
             options={{responsive: true, maintainAspectRatio: false}} height={50} data={{
                labels: ["Days", "Total Days"], 
                datasets:[{
                    data: [1, 7],
                    label: "first dataset", 
                    backgroundColor: ["red", "blue"]
                    
                }]
            }}
            />
           </Chartnigga>
    )
}


export default ChartRight;

