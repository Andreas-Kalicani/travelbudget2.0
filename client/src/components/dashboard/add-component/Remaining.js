import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
const Remaining =() => {
    const { expenses, budget, destinationCurrencyCode } = useContext(AppContext);

    const totalExpenses= expenses.reduce((total, item)=>{
        return total = total + item.cost;
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
    return (
        <div className={`alert ${alertType}`}>
            <div className="status">
              <div className="status-remaining"></div>
            </div>
            <span>
                  Remaining: {destinationCurrencyCode}{budget - totalExpenses}
              </span>  

        </div>
    );
}

export default Remaining;