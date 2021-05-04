import React from "react"; 
import styled from 'styled-components';
import ChartLeft from "./ChartLeft";
import ChartRight from "./ChartRight";



const ChartContainer = styled.div`
  display: flex; 
  justify-content: center; 
  margin: 1%;
  width: 50%; 
    
`

const StyledChartBox = styled.div`
    width: 50%; 
    height: auto; 
    padding:10px;
    padding-bottom:20px;
    border: 2px solid grey; 
    box-shadow: ${props=>props.theme.boxShadow};
    margin:0% 5%; 
    border-radius: 11px;

`

const HeaderChart = styled.h3`
width: 100%; 
padding:10px;
background-color: #eee;
border: 2px solid grey; 
text-align: center; 
border-radius: 10px; 

`


const Chartbox= () => {
    return (
        <ChartContainer>
            <StyledChartBox> 
            <HeaderChart>Budget Expense</HeaderChart>
            <ChartLeft className="chart2" height={500} width={100} />
            </StyledChartBox>
            <StyledChartBox>
            <HeaderChart>Expense</HeaderChart>
              <ChartRight/>
             </StyledChartBox>
        </ChartContainer>

    )
}
export default Chartbox; 

