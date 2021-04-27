import React from 'react';
import countries from "../data/datainput";

export const FormContext = React.createContext();

const FormProvider = (props) => {

    let [inputBudget, setBudget] = useState("") ;
    let [conversionResult, setConversionResult] =useState(0);
    let [originCurrencyCode, setOriginCurrencyCode] =useState("");
    let [destinationCurrencyCode, setDestinationCurrencyCode] =useState("");
    let [days, setDays] =useState("");
    let [startDate, setStartDate] = useState(new Date(Date.now()));
    let [endDate, setEndDate] = useState(tomorrowDay());
    let [homeCountry, setHomeCountry] = useState("")
    let [destinationCountry, setDestinationCountry] = useState("")
    let [apiLoaded, setApiLoaded]= useState(false)
    let [error, setError] =useState(false)

    //initialize the return day of the form with tomorrow's day
    const tomorrowDay=()=>{
    const today = new Date()
    const tomorrow = new Date(today)
    return tomorrow.setDate(tomorrow.getDate() + 1)
}

    // the total number of days of duration of the trip
    const getDaysAmount =()=> setDays (Math.ceil((endDate - startDate.getTime())/(1000*60*60*24)))
    

    //Find the Currency Code of the country Choosen 
    const getOriginCurrency =()=>{
        return setOriginCurrencyCode (countries.find((country) => 
        country.countryName===homeCountry) ? countries.find((country) => 
        country.countryName===homeCountry).currencyCode  : "Error");
    }

    
    const getDestinationCurrency =()=>{
        return setDestinationCurrencyCode (countries.find((country) => 
        country.countryName===destinationCountry
        ) ? countries.find((country) => 
        country.countryName === destinationCountry).currencyCode : "Error");
    }


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
            startDate:startDate,
            setStartDate:setStartDate,
            homeCountry:homeCountry,
            setHomeCountry:setHomeCountry,
            endDate:endDate,
            setEndDate:setEndDate,
            destinationCountry:destinationCountry,
            setDestinationCountry:setDestinationCountry,
            apiLoaded:apiLoaded,
            setApiLoaded:setApiLoaded,
            error: error,
            setError:setError,
            getDaysAmount: getDaysAmount,
            getOriginCurrency: getOriginCurrency,
            getDestinationCurrency : getDestinationCurrency,

        }}>
            {props.children}

        </FormContext.Provider>
    )
}

export default FormProvider;