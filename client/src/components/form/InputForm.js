import { useState, useEffect} from "react";
import React, {useContext} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/* import countries from "../../data/datainput"; */
import styled, {createGlobalStyle, css} from 'styled-components';
import {tomorrowDay, getCountriesList } from "../../helper/functions";
import {AppContext} from "../../context/AppContext";
import { useHistory } from "react-router-dom";




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
margin-bottom: 30px;
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
margin-bottom: 30px;
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




export default function InputForm(){

    let [startDate, setStartDate] = useState(new Date(Date.now()));
    let [endDate, setEndDate] = useState(tomorrowDay());
    let [countries, setDataCountries]=useState([])
    
    const context = useContext(AppContext);
   

    
    // to Redirect to Dashboard
    const history = useHistory(); 

    //get countries data from database
    
    useEffect(() => {
        getCountriesList().then((data)=>setDataCountries(data))
            
    },[])
   
 
   

    // the total number of days of duration of the trip
    
    useEffect(() => {
        context.setDays (Math.ceil((endDate- startDate.getTime())/(1000*60*60*24)))
            
    },[])

    
    

    //Find the Currency Code of the country Choosen 
    useEffect(() => {
        context.setOriginCurrencyCode (countries.find((country) => 
        country.countryName===context.homeCountry) ? countries.find((country) => 
        country.countryName===context.homeCountry).currencyCode  : "Error");
    })

    
    useEffect(() => {
        context.setDestinationCurrencyCode (countries.find((country) => 
        country.countryName===context.destinationCountry
        ) ? countries.find((country) => 
        country.countryName === context.destinationCountry).currencyCode : "Error");
    })

    

    //handlers

    const handleInputBudgetChange =(e)=>{
        context.setBudget(e.target.value);
        
    }
    const handleInputOrigin =(e)=>{
        context.setHomeCountry(e.target.value);  
        
    }

    const handleInputDestiny =(e)=>{
        context.setDestinationCountry(e.target.value);  
        
    }
    const handleInputBudgetName =(e)=>{
        context.setBudgetName(e.target.value);  
        
    }
    const handleInputPeople =(e)=>{
        context.setNumberPeople(e.target.value);  
        
    }
    
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(context.inputBudget.trim()===""|| context.homeCountry.trim()===""|| context.destinationCountry.trim()===""){
            context.setError(true);
            return;
        }
        context.setError(false)
        /* history.push('/dashboard'); */
        fetch(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_APIKEY }/pair/${context.originCurrencyCode}/${context.destinationCurrencyCode}/${context.inputBudget}`,{
            /* mode:'cors' */
        })
            .then(response=> response.json())
            .then((data)=>{ 
                context.setConversionResult(Math.round(data.conversion_result * 100) / 100);
                context.setApiLoaded(true)
            })
            
    } 

    return (
        <Container>
            
            <GlobalStyle/>
            <FormWrapper>
                
                <Form className="InputForm-form" onSubmit={handleSubmit}>
                {context.error? <Error>All fields are required</Error> : null }
                    <H2>Create your budget</H2>
                    <hr/>

                    <Label>Budget Name</Label>
                    <Input
                    name="inputBudget"
                    type='text'
                    placeholder= "Trip to Berlin"
                    value={context.budgetName}
                    onChange={handleInputBudgetName} 
                    />
                    <Label>Your Budget</Label>
                    <Input
                    name="inputBudget"
                    type='number'
                    placeholder= "1000"
                    value={context.inputBudget}
                    onChange={handleInputBudgetChange}
                    
                    />

                    <Label>Select your Origin country</Label>
                    <Select 
                    placeholder= "Choose a country"
                    value={context.homeCountry}  
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
                    value={context.destinationCountry} 
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
                    type="number"
                    value={context.numberPeople}  
                    onChange={handleInputPeople} 
                    
                    >
                        <option value ="" disabled hidden>Choose a number</option>
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
                {/* {
                    context.apiLoaded &&
                <h1>Data Return: {isNaN(context.conversionResult) ? "Introduce un valor" : context.conversionResult } {context.destinationCurrencyCode} </h1>
                } */}
            
                </div>

            </FormWrapper>
            
            
        </Container>
    );


}

