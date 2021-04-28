import React from 'react'
import AddComponent from './add-component/AddComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Charts from './charts-components/charts';
import Chart2 from './charts-components/chart2';
import "./dashboard.css"; 
import { ThemeProvider } from "styled-components";
import Box from "./Box";
import ChartBox from "./ChartBox"; 
import Horizentalchart from "./charts-components/Horizentalchart"; 
import "./dashboard.css"; 
import styled, {css} from 'styled-components';

const BoxesContainer = styled.div`
display:flex;
flex-flow: row;
justify-content:center;
align-items:center;
width:100%;
margin-bottom:20px;
height:auto;


`

export default function Dashboard({
    }) {

      
    return (
  
     <>
      <BoxesContainer>

       <Box/>
      </BoxesContainer>
      <BoxesContainer>
        <AddComponent />
       <ChartBox/>
      </BoxesContainer>
       <Horizentalchart/>
       
       {/* the code from Box and ChartBox needs double-checking 
       because it's collapsing everytime we add an expense, 
       when both commented, the add component works fine and displays data 
       accordinigly,
       */}

      </>
        
        
    )
}
