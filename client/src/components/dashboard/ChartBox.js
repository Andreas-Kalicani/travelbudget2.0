import React from "react"; 
import "./BoxChart.css"
import Chart2 from "./charts-components/chart2";
import Charts from "./charts-components/charts"; 
import styled from 'styled-components';



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


const ChartBox= () => {
    return (
        <ChartContainer>
            <StyledChartBox> 
            <HeaderChart>Remaining</HeaderChart>
            <Chart2 className="chart2" height={500} width={100} />
            </StyledChartBox>
            <StyledChartBox>
            <HeaderChart>Expense</HeaderChart>
              <Charts/>
             </StyledChartBox>
        </ChartContainer>

    )
}
export default ChartBox; 

