import React from 'react'

import ChartHorizontal from "./ChartHorizontal"
import styled from "styled-components";
import Chartbox from './Chartbox';

const ReportChartsContainer = styled.div`
display:flex;
flex-flow: row;
justify-content:space-around;
align-items:flex-start;
width:100%;
margin-bottom:10px;
height:auto;


`



const Report = () => {



    return (
        <>
            <ReportChartsContainer>
                <Chartbox/>
            </ReportChartsContainer>
            <ReportChartsContainer>
                <ChartHorizontal/> 
            </ReportChartsContainer>
           
            
        </>
    )
}


export default Report


