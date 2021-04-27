import React, { useCallback, useEffect } from 'react';

// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'
// import Budget from './Budget';
// import Remaining from './Remaining'
// import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import './statusBudget.css'
const AddComponent = () => {

  
  return (

    <div className="status-container">
      <div className="tp-bar">
      <div className="travel-avatar"></div>
      <h2>Your Balance</h2>
      <div className="btn-modal">Add an expense</div>
      </div>
      <div className="row mt-3">
        {/* <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div> */}
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
      

  );
}

export default AddComponent;
