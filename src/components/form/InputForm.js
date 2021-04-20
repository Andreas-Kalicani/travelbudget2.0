import { useState, useEffect} from "react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countries from "../datainput/datainput";
import styled, {createGlobalStyle, css} from 'styled-components';


const GlobalStyle =createGlobalStyle`
    body{
        font-family: Arial, Helvetica, sans-serif;
        margin:0px auto;
    }
    
`
const sharedStyles = css`
    background-color: #eee;
    height:40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 0px 0 20px 0;
    box-sizing: border-box;
`
const FormWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
padding:0 20px;
margin-top:12%;
margin-bottom:20%;
`
const Form = styled.form`
width:100%;
max-width:700px;
padding:40px;
background-color:#fff;
border-radius:10px;
box-sizing: border-box;
box-shadow: 0px 0px 20px 0px rgba(0,0,0, 0.2);
`
const Input = styled.input`
    display:block;
    width:100%;
    padding:20px;
    ${sharedStyles}
`
const Button = styled.button`
    display:block;
    background-color:#00838F;
    font-size: .9rem;
    width:25%;
    height:40px;
    color: #fff;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    border-radius: 5px;
    margin-top:10px;
    padding: 0 20px;
    box-sizing: border-box;
    transition: background-color .3s ease;
   
    &:hover{
        background-color:#26C6DA;
        cursor:pointer;
    }
`
const Select =styled.select`
    display:block;
    width:100%; 
    ${sharedStyles} 
    padding-left:10px;
    
`;


const Error =styled.div`
background-color:red;
color:white;
padding:1rem;
width:100%;
text-align:center;
margin-bottom: 2rem;
`;



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
    const [error, setError] =useState(false)

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
        if(inputBudget.trim()===""|| homeCountry.trim()===""|| destinationCountry.trim()===""){
            setError(true);
            return;
        }
        setError(false)
       
        fetch(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_APIKEY }/pair/${originCurrencyCode}/${destinationCurrencyCode}/${inputBudget}`,{
            mode:'cors'
        })
            .then(response=> response.json())
            .then((data)=>{ 
            setConversionResult(Math.round(data.conversion_result * 100) / 100);
            setApiLoaded(true)
            })
            
    } 

    
   
    

    

    return (
        <>
            <GlobalStyle/>
            <FormWrapper>
                
                <Form className="InputForm-form" onSubmit={handleSubmit}>
                {error? <Error>All fields are required</Error> : null }
                    <h2>Create your budget</h2>
                    <hr/>

                    <label>Budget Name</label>
                    <Input
                    name="inputBudget"
                    type='text'
                    placeholder= "Trip to Berlin"
                    /* value={budgetName}
                    onChange={handleInputBudgetNameChange} */
                    /* required */
                    />
                    <label>Your Budget</label>
                    <Input
                    name="inputBudget"
                    type='number'
                    placeholder= "1000"
                    value={inputBudget}
                    onChange={handleInputBudgetChange}
                    /* required */
                    />
                    

                    <label>Select your Origin country</label>
                    <Select 
                    placeholder= "Choose a country"
                    value={homeCountry}  
                    name="countriesOrigin"
                    onChange={handleInputOrigin}
                   /*  required */
                    >
                        <option value ="" disabled hidden>Choose your country </option>
                        {countries.map(option => (
                            <option key={option.countryCode} value={option.countryName}>
                                {option.countryName}
                            </option>
                        ))}
                    </Select>
                    

                    <label>Select your country destination</label>
                    <Select 
                    placeholder= "Choose a country"
                    value={destinationCountry} 
                    name="countriesDestination"
                    onChange={handleInputDestiny}
                   /*  required */
                    >
                        <option value ="" disabled hidden>Choose your country destination</option>
                        {countries.map(option => (
                            <option key={option.countryCode} value={option.countryName}>
                                {option.countryName}
                            </option>
                        ))}
                    </Select>

                    <label>Number of people</label>
                    <Select 
                    placeholder= "1"
                    /* value={destinationCountry}  */
                    name="people"
                    /* onChange={handleInputDestiny} */
                    /* required */
                    >
                        <option value ="" disabled hidden>people</option>
                        <option key={1} value={1}>1</option>
                        <option key={2} value={2}>2</option>
                        <option key={3} value={3}>3</option>
                        <option key={4} value={4}>4</option>
                        <option key={5} value={5}>5</option>
                        <option key={6} value={6}>6</option>
                        <option key={7} value={7}>7</option>
                        <option key={8} value={8}>8</option>
                        <option key={9} value={9}>9</option>
                        <option key={10} value={10}>10</option>

                        
                    </Select>

                    <label>Depart Day</label>
    
                    <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    />
                    
                    <label>Return Day</label>
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="dd/MM/yyyy"
                    />

                
                    <Button type="submit">Send</Button>
                </Form>
               
                <div>
                {
                    apiLoaded &&
                <h1>Data Return: {isNaN(conversionResult) ? "Introduce un valor" : conversionResult } {destinationCurrencyCode} </h1>
                }
            
                </div>

            </FormWrapper>
            
            
        </>
    );


}

