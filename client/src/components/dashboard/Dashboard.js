import React from 'react'
import AddComponent from './add-component/AddComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./dashboard.css"; 
import Box from "./Box";
import "./dashboard.css"; 
import styled from 'styled-components';

const BoxesContainer = styled.div`
display:flex;
flex-flow: row;
justify-content:space-around;
align-items:flex-start;
width:100%;
margin-bottom:10px;
height:auto;


`

export default function Dashboard() {

      
    return (
  
     <>
      <BoxesContainer>

       <Box/>
      </BoxesContainer>
      <BoxesContainer>
        <AddComponent />
        
      </BoxesContainer>
      
       
       {/* the code from Box and ChartBox needs double-checking 
       because it's collapsing everytime we add an expense, 
       when both commented, the add component works fine and displays data 
       accordinigly,
       */}

      </>
        
        
    )
}
