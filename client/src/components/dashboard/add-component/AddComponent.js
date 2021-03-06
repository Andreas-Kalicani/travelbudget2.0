import React from 'react';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import './statusBudget.css'
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  min-height:100px;
  margin: 3%; 
  margin-top: 1rem!important;
  box-shadow:${props=>props.theme.boxShadow};
  border: 1px solid #ddd; 
 
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
    
      <ExpensesListContainer>
        <div className="col-sm">
          <ExpenseList />
        </div>
      </ExpensesListContainer> 
     
        <ButtonWrapper>
          <AddExpenseForm />
        </ButtonWrapper>
      
    </Container>
      

  );
}

export default AddComponent;
