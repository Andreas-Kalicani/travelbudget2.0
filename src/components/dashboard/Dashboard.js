import React from 'react'
import AddComponent from './add-component/AddComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard({
    inputBudget,
    conversionResult,
    originCurrencyCode,
    destinationCurrencyCode
    }) {
    return (
        <div>
            
            <AddComponent 
               inputBudget={inputBudget} 
               conversionResult={conversionResult}
               originCurrencyCode={originCurrencyCode}
               destinationCurrencyCode={destinationCurrencyCode}
         
            />
        </div>
    )
}
