import { formatMs } from "@material-ui/core";
import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
    colors : {
        primary : "#060B26",
        secondary : "#FFFFFF",
        red: "#FF2900",
        orange: "#FF662F",
        grey:"#EEEEEE",
        button: "#2991cc",
        buttonHover:"#060B26"
    },
    largeViewport : {
        size: "1000px", // to be used as min-width in media queries
        padding : "50px", // what is this?
        margin : "2.75%",  // gutter inbetween group of components (e.g. text sections vs accordion)
        
    },
    mediumViewport : {
        minSize : "768px",
        maxSize : "1000px",
        padding : "30px",
        margin : "30px",
    },
    smallViewport : {
        size : "768px", // to be used as max-width in media queries
        padding : "30px",
        margin : "30px",
    },

    boxShadow: "0px 0px 20px 0px rgba(0,0,0, 0.2)",
    
    mainContentWidth : "80%", // all viewports have the same width in the outermost div that holds everything
    mainContentMaxWidth : "1080px",
    inbetweenPadding : "20px", // used as padding bottom between components
    inbetweenTextPadding : "20px", // used as padding bottom between text sections (headers, paragraphs, etc.)
    bigMarginBottom : "60px"
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;

