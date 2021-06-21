import styled, { createGlobalStyle } from "styled-components";
import GlobalStyles from "./Global.styles";

export const GS = createGlobalStyle`
    html {
    box-sizing: border-box;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }
    body{
        margin:0;
        font-family: 'Open Sans', sans-serif;
    }
`;

export const WrapperCommonStyles = `
    max-width: 1000px;
    width: 100%;
    display: flex;
    margin: auto;
    padding: 0 15px;
`;
