import React from 'react'
import AddComponent from './add-component/AddComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Charts from './add-component/charts';
import Chart2 from './chart2';
import "./dashboard.css"; 


export default function Dashboard({
    inputBudget,
    conversionResult,
    originCurrencyCode,
    destinationCurrencyCode,
    days
    }) {

      
    return (
        <div>
            
            <AddComponent 
               inputBudget={inputBudget} 
               conversionResult={conversionResult}
               originCurrencyCode={originCurrencyCode}
               destinationCurrencyCode={destinationCurrencyCode}
         
            />
           <div className="theCharts">
           <Charts 
           inputBudget={inputBudget} 
           conversionResult={conversionResult}
           originCurrencyCode={originCurrencyCode}
           destinationCurrencyCode={destinationCurrencyCode}
           days={days} />
           <Chart2/>
            </div>
           
        </div>
        

        
    )
}
