import { useState} from "react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countries from "../../data/datainput";
import styled, {createGlobalStyle, css} from 'styled-components';
import {tomorrowDay} from "../../helper/functions"


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
height:70vh;
/* padding:0 20px; */
margin-top: 10px;
/* margin-bottom:20%; */
@media (max-height: 1060px) {
    height: 90vh;
  }

  @media (max-height: 862x) {
    height: 100vh;
    
  }


`
const Form = styled.form`
width:100%;
max-width:700px;
padding:40px;
color:${props=>props.theme.colors.primary}; 
background-color:#fff;
border-radius:10px;
box-sizing: border-box;
box-shadow:${props=>props.theme.boxShadow}; 
@media (max-height: 1250px) {
    margin-top: 100px;
  }

  @media (max-height: 862px) {
    
    margin-top:300px;
  }
  
  
`

const H2 =styled.h2`
    font-family:Arial;
    
`;

const Container =styled.div`
    margin-top:70px;
    @media (max-height: 800px) {
        margin-top:20px;
  }
  
  
    
`;

const Label =styled.label`
    font-family:"Verdana";
    font-size:0.9rem;
    
`;
const Input = styled.input`
    display:block;
    width:100%;
    padding:20px;
    ${sharedStyles}
`
const Button = styled.button`
    display:block;
    background-color:${props=>props.theme.colors.button};
    font-size: .9rem;
    width:25%;
    height:40px;
    color: ${props=>props.theme.colors.secondary};
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    border-radius: 5px;
    margin-top:10px;
    padding: 0 20px;
    box-sizing: border-box;
    transition: background-color .3s ease;
   
    &:hover{
        background-color:${props=>props.theme.colors.buttonHover};
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


    //States
    const [startDate, setStartDate] = useState(new Date(Date.now()));
    const [endDate, setEndDate] = useState(tomorrowDay());
    const [homeCountry, setHomeCountry] = useState("")
    const [destinationCountry, setDestinationCountry] = useState("")
    const [apiLoaded, setApiLoaded]= useState(false)
    const [error, setError] =useState(false)

    // the total number of days of duration of the trip
    setDays (Math.ceil((endDate - startDate.getTime())/(1000*60*60*24)))
    

    //Find the Currency Code of the country Choosen 

    setOriginCurrencyCode (countries.find((country) => 
        country.countryName===homeCountry) ? countries.find((country) => 
        country.countryName===homeCountry).currencyCode  : "Error");

    setDestinationCurrencyCode (countries.find((country) => 
        country.countryName===destinationCountry
        ) ? countries.find((country) => 
        country.countryName === destinationCountry).currencyCode : "Error");


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
    const handleInputBudgetNameChange =(e)=>{
        setBudgetName(e.target.value);  
        
    }
    const handleInputPeople =(e)=>{
        setNumberPeople(e.target.value);  
        
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
        <Container>
            <GlobalStyle/>
            <FormWrapper>
                
                <Form className="InputForm-form" onSubmit={handleSubmit}>
                {error? <Error>All fields are required</Error> : null }
                    <H2>Create your budget</H2>
                    <hr/>

                    <Label>Budget Name</Label>
                    <Input
                    name="inputBudget"
                    type='text'
                    placeholder= "Trip to Berlin"
                    value={context.budgetName}
                    onChange={handleInputBudgetNameChange} 
                    />
                    <Label>Your Budget</Label>
                    <Input
                    name="inputBudget"
                    type='number'
                    placeholder= "1000"
                    value={inputBudget}
                    onChange={handleInputBudgetChange}
                    
                    />
                    

                    <Label>Select your Origin country</Label>
                    <Select 
                    placeholder= "Choose a country"
                    value={homeCountry}  
                    name="countriesOrigin"
                    onChange={handleInputOrigin}
                   
                    >
                        <option value ="" disabled hidden>Choose your country </option>
                        {countries.map(option => (
                            <option key={option.countryCode} value={option.countryName}>
                                {option.countryName}
                            </option>
                        ))}
                    </Select>
                    

                    <Label>Select your country destination</Label>
                    <Select 
                    placeholder= "Choose a country"
                    value={destinationCountry} 
                    name="countriesDestination"
                    onChange={handleInputDestiny}
                   
                    >
                        <option value ="" disabled hidden>Choose your country destination</option>
                        {countries.map(option => (
                            <option key={option.countryCode} value={option.countryName}>
                                {option.countryName}
                            </option>
                        ))}
                    </Select>

                    <Label>Number of people</Label>
                    <Select 
                    placeholder= "1"
                    value={context.numberPeople}  
                    name="people"
                    onChange={handleInputPeople} 
                    
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

                    <Label>Depart Day</Label>
    
                    <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    />
                    
                    <Label>Return Day</Label>
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
            
            
        </Container>
    );


}

