import React, {useState} from 'react';
import countries from "../data/datainput";
import {tomorrowDay} from "../helper/functions";

export const FormContext = React.createContext();

const FormProvider = (props) => {

    let [inputBudget, setBudget] = useState("") ;
    let [conversionResult, setConversionResult] =useState(0);
    let [originCurrencyCode, setOriginCurrencyCode] =useState("");
    let [destinationCurrencyCode, setDestinationCurrencyCode] =useState("");
    let [days, setDays] =useState("");
    let [homeCountry, setHomeCountry] = useState("")
    let [destinationCountry, setDestinationCountry] = useState("")
    let [apiLoaded, setApiLoaded]= useState(false)
    let [error, setError] =useState(false)

    //initialize the return day of the form with tomorrow's day
    /* const tomorrowDay=()=>{
    const today = new Date()
    const tomorrow = new Date(today)
    return tomorrow.setDate(tomorrow.getDate() + 1)
} */

    

    return (
        <FormContext.Provider value={{
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
            /* getDaysAmount: getDaysAmount,
            getOriginCurrency: getOriginCurrency,
            getDestinationCurrency : getDestinationCurrency, */

        }}>
            {props.children}

        </FormContext.Provider>
    )
}

export default FormProvider;