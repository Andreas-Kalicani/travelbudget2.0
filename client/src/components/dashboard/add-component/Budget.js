import React, { useContext } from 'react';
import './statusBudget.css'
import { AppContext } from '../../../context/AppContext';
const Budget = () => {
    const { budget, destinationCurrencyCode } = useContext(AppContext);
     return (
        <div className="alert alert-secondary">
            <div className="status">
                <div className="status-budget"></div>
            </div>

            <span>Budget: {destinationCurrencyCode}{budget}</span>
            
        </div>
     )
 }

 export default Budget;