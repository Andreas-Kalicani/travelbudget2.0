import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../../../context/AppContext';
import styled from 'styled-components';

const ExpenseItemAmount = styled.span`
    /* display: inline-block;
    padding: .25em .5em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .50rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #007bff;
    margin-right: 1rem!important;
     */
    display: inline-block;
    padding: .25em .5em;
    font-size: 75%;
    font-weight: 900;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .50rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #FF2900;
    margin-right: 1rem!important;

`

const ExpenseItem = (props) => {
    const { dispatch, destinationCurrencyCode } = useContext(AppContext);

    const handleDeleteExpense = ()=> {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })

    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div className="">
                <ExpenseItemAmount>
                    - {destinationCurrencyCode}{props.cost}    
                </ExpenseItemAmount>
                <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;