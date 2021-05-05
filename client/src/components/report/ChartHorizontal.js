import React from "react";
import {HorizontalBar} from "react-chartjs-2";
import styled from 'styled-components';

const HorizontalContainer = styled.div`
    margin: 0 auto ;
    height: 50%;
    width: 60%; 
    margin-bottom: 30px;
    margin-top: 30px;
  


`


const StyledChartBox = styled.div`
    width: 100%; 
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
padding:20px;
background-color: #eee;
border: 2px solid grey; 
text-align: center; 
border-radius: 10px; 

`

const ChartHorizontal = () =>{
    return (
        <HorizontalContainer>
            <StyledChartBox>
            <HeaderChart>Expenses by category</HeaderChart>
            <HorizontalBar 
            data = {{
                labels: ["Entertainment", "Food", "Travels", "Others"],
                datasets: [
                    {
                        label: "The data of my Expenses", 
                        backgroundColor: ["#ea5455", "#7367f0", "#f55555", "#e80505"], 
                        data: [65, 59, 79, 40]
                    }
                ]
            }}
            />
            </StyledChartBox>
        </HorizontalContainer>
    )
}

export default ChartHorizontal; 