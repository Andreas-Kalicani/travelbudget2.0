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
            <h1>{conversionResult}</h1>
            <AddComponent />
        </div>
    )
}
