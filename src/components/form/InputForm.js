import { useState, useEffect} from "react";
import React from "react";


import countries from "../datainput/datainput"


export default function InputForm(){

    const [budget, setBudget] = useState("")
    const [homeCountry, setHomeCountry] = useState("")
    const [destinationCountry, setDestinationCountry] = useState("")
    const [conversionResult, setConversionResult] =useState(0)
    const [originCurrencyCode, setOriginCurrencyCode] =useState("")
    const [destinationCurrencyCode, setDestinationCurrencyCode] =useState("")
    const [apiLoaded, setApiLoaded]= useState(false)

  
    
  

    const handleInputBudgetChange =(e)=>{
        setBudget(e.target.value);
        
    }
    const handleInputOrigin =(e)=>{
        setHomeCountry(e.target.value);  
        
    }
    useEffect(() => {
        
        setOriginCurrencyCode (countries.find((country) => country.countryName===homeCountry) ? countries.find((country) => country.countryName===homeCountry).currencyCode  : "EUR");
        
    }, [homeCountry]);

    const handleInputDestiny =(e)=>{
        setDestinationCountry(e.target.value);
    }
    useEffect(() => {
        
        setDestinationCurrencyCode (countries.find((country) => {
            return (country.countryName===destinationCountry)
        }) ? countries.find((country) => country.countryName === destinationCountry).currencyCode : "GBP");
        
        
    }, [destinationCountry]);


    
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`https://v6.exchangerate-api.com/v6/343f756238f4dc54c1685159/pair/${originCurrencyCode}/${destinationCurrencyCode}/${budget}`,{
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
                name="budget"
                type='number'
                placeholder= "xxx.xxx"
                value={budget}
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

