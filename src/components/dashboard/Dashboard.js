import React from 'react'
import AddComponent from './add-component/AddComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Charts from './charts-components/charts';
import Chart2 from './charts-components/chart2';
import "./dashboard.css"; 
import { AppProvider } from '../../context/AppContext';
import { ThemeProvider } from "styled-components";
import Box from "./Box";
import ChartBox from "./ChartBox"; 
import Horizentalchart from "./charts-components/Horizentalchart"; 
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
    
        <AppProvider
        
        inputBudget={inputBudget} 
        conversionResult={conversionResult}
        originCurrencyCode={originCurrencyCode}
        destinationCurrencyCode={destinationCurrencyCode}
> 
       <Box/>
       <ChartBox/>
       <Horizentalchart/>
       
       {/* the code from Box and ChartBox needs double-checking 
       because it's collapsing everytime we add an expense, 
       when both commented, the add component works fine and displays data 
       accordinigly,
       */}

    <AddComponent />
    {/* <Charts />
    <Chart2 />   */}

           <div className="theCharts">
         {/* <Charts 
           inputBudget={inputBudget} 
           conversionResult={conversionResult}
           originCurrencyCode={originCurrencyCode}
           destinationCurrencyCode={destinationCurrencyCode}
           days={days} /> */}
          {/* <Chart2/> */}
          </div>  
      </AppProvider> 
        </div>
        
        
    )
}
