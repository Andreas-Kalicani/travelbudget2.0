import React, { useCallback, useEffect } from 'react';

// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'
import Budget from './Budget';
import Remaining from './Remaining'
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import './statusBudget.css'
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  min-height:100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem!important;
  /* padding:30px; */
  box-shadow:${props=>props.theme.boxShadow}; 
 
  @media (min-width: 576px){
    max-width: 540px;
}

`

const H2 = styled.h2`
  padding: 1em;
  background-color:${props=>props.theme.colors.grey};
  justify-content:center;
  display: flex;
  flex-wrap: wrap;
  color:${props=>props.theme.colors.primary}; 
  border: 1px solid #ddd;
  


`


const ButtonWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  padding:20px;
  background-color:${props=>props.theme.colors.grey};
  border: 1px solid #ddd;


`
const ExpensesListContainer = styled.div`
 /*  margin-top: 1rem!important; */
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;


`


const AddComponent = () => {

  
  return (

    <Container>
      <H2>Expenses</H2>
      {/* <div className="travel-avatar"></div>
      <h2>Your Balance</h2>
      <div className="btn-modal">Add an expense</div>
      </div> */}
      {/* <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div> */}
      {/* <h3 className="mt-3">Expenses</h3> */}
      <ExpensesListContainer>
        <div className="col-sm">
          <ExpenseList />
        </div>
      </ExpensesListContainer> 
      {/* <h3 className="mt-3">Add Expense</h3>
      <div className="mt-3"> */}
        <ButtonWrapper>
          <AddExpenseForm />
        </ButtonWrapper>
      {/* </div> */}
    </Container>
      

  );
}

export default AddComponent;
