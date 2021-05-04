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

const ChartHorizontal = () =>{
    return (
        <HorizontalContainer>
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
        </HorizontalContainer>
    )
}

export default ChartHorizontal; 