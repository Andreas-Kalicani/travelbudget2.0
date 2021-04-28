import { createContext, useReducer, useState } from 'react';

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
    
    let [inputBudget, setBudget] = useState("") ;
    let [conversionResult, setConversionResult] =useState("");
    let [originCurrencyCode, setOriginCurrencyCode] =useState("");
    let [destinationCurrencyCode, setDestinationCurrencyCode] =useState("");
    let [days, setDays] =useState("");
    let [homeCountry, setHomeCountry] = useState("");
    let [destinationCountry, setDestinationCountry] = useState("");
    let [apiLoaded, setApiLoaded]= useState(false);
    let [error, setError] =useState(false);
    let [budgetName, setBudgetName]=useState("");
    let [numberPeople, setNumberPeople]=useState("");

    const categories = ['food', 'transport', 'accomodation', 'activities', 'insurance', 'gifts', 'others']
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
            categories: categories,
            dispatch,
            inputBudget:inputBudget,
            setBudget:setBudget,
            conversionResult:conversionResult,
            setConversionResult:setConversionResult,
            destinationCurrencyCode:destinationCurrencyCode,
            originCurrencyCode:originCurrencyCode,
            setOriginCurrencyCode:setOriginCurrencyCode,
            setDestinationCurrencyCode:setDestinationCurrencyCode,
            days:days,
            setDays:setDays,
            homeCountry:homeCountry,
            setHomeCountry:setHomeCountry,
            destinationCountry:destinationCountry,
            setDestinationCountry:setDestinationCountry,
            apiLoaded:apiLoaded,
            setApiLoaded:setApiLoaded,
            error: error,
            setError:setError,
            budgetName: budgetName,
            setBudgetName: setBudgetName,
            numberPeople: numberPeople,
            setNumberPeople:setNumberPeople,
            
        }}
    >
        {props.children}
    </AppContext.Provider>)
}