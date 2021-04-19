import { useState, useEffect} from "react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import countries from "../datainput/datainput"



export default function InputForm({
    inputBudget,
    setBudget,
    conversionResult,
    setConversionResult,
    originCurrencyCode,
    destinationCurrencyCode,
    setOriginCurrencyCode,
    setDestinationCurrencyCode,
    setDays,
    days
    }){

    const tomorrowDay=()=>{
        const today = new Date()
        const tomorrow = new Date(today)
        return tomorrow.setDate(tomorrow.getDate() + 1)
    }
        
    



    //States
    const [startDate, setStartDate] = useState(new Date(Date.now()));
    const [endDate, setEndDate] = useState(tomorrowDay());
    const [homeCountry, setHomeCountry] = useState("")
    const [destinationCountry, setDestinationCountry] = useState("")
    const [apiLoaded, setApiLoaded]= useState(false)

    // the total number of days of duration of the trip
    
    setDays (Math.ceil((endDate - startDate.getTime())/(1000*60*60*24)))
    console.log(days)
   

  /*   const [totalDays, setTotalDays] = useState("") */ 

    

    //Find the Currency Code of the country Choosen 
    useEffect(() => {
        
        setOriginCurrencyCode (countries.find((country) => country.countryName===homeCountry) ? countries.find((country) => country.countryName===homeCountry).currencyCode  : "Error");
        
    }, [homeCountry]);

    
    useEffect(() => {
        
        setDestinationCurrencyCode (countries.find((country) => {
            return (country.countryName===destinationCountry)
        }) ? countries.find((country) => country.countryName === destinationCountry).currencyCode : "Error");
        
        
    }, [destinationCountry]);



    //handlers

    const handleInputBudgetChange =(e)=>{
        setBudget(e.target.value);
        
    }
    const handleInputOrigin =(e)=>{
        setHomeCountry(e.target.value);  
        
    }

    const handleInputDestiny =(e)=>{
        setDestinationCountry(e.target.value);  
        
    }
   
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`https://v6.exchangerate-api.com/v6/343f756238f4dc54c1685159/pair/${originCurrencyCode}/${destinationCurrencyCode}/${inputBudget}`,{
            mode:'cors'
        })
            .then(response=> response.json())
            .then((data)=>{ 
            setConversionResult(Math.round(data.conversion_result * 100) / 100);
            setApiLoaded(true)
            })
            
    } 

    
    

    
    


    return (
        <div >
            <form className="InputForm-form" onSubmit={handleSubmit}>
                <label>Your Budget</label>
                <input
                name="inputBudget"
                type='number'
                placeholder= "xxx.xxx"
                value={inputBudget}
                onChange={handleInputBudgetChange}
                required
                />
                
                
                <label>Select your Origin country</label>
                <select 
                value={homeCountry}  
                name="countriesOrigin"
                onChange={handleInputOrigin}
                required
                >
                    <option value ="" disabled hidden>Choose your country </option>
                    {countries.map(option => (
                        <option key={option.countryCode} value={option.countryName}>
                            {option.countryName}
                        </option>
                    ))}
                </select>
                

                <label>Select your country destination</label>
                <select 
                value={destinationCountry} 
                name="countriesDestination"
                onChange={handleInputDestiny}
                required
                >
                    <option value ="" disabled hidden>Choose your country destination</option>
                    {countries.map(option => (
                        <option key={option.countryCode} value={option.countryName}>
                            {option.countryName}
                        </option>
                    ))}
                </select>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"

                />
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd/MM/yyyy"
                />

            
                <button type="submit">Send</button>

            </form>
            
            <div>
                {
                    apiLoaded &&
                <h1>Data Return: {isNaN(conversionResult) ? "Introduce un valor" : conversionResult } {destinationCurrencyCode} </h1>
                }
            
            </div>
        </div>
    );


}

