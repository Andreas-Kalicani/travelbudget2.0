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
const initialState  = {
    budget: 3500,
    expenses: [
        { id: 12, name: 'rent', cost: 1000},
        { id: 13, name: 'utilities', cost: 250},
        { id: 14, name: 'transportation', cost: 50},
    ]
}
export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider 
        value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}
    >
        {props.children}
    </AppContext.Provider>)
}