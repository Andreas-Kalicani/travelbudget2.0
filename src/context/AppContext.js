import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense)=> expense.id !== action.payload
                    ),
            }

        default:
            return state;
    }
}

export const AppContext = createContext();

export const AppProvider = (props) => {
   const {conversionResult, destinationCurrencyCode} = props



    const initialState  = {
        budget: conversionResult,
        expenses: [],
        destinationCurrencyCode: destinationCurrencyCode
    }
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider 
        value={{
            budget: state.budget,
            expenses: state.expenses,
            destinationCurrencyCode: state.destinationCurrencyCode,
            dispatch,
        }}
    >
        {props.children}
    </AppContext.Provider>)
}