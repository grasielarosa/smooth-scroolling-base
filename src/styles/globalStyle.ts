import { createGlobalStyle } from 'styled-components';
import { device } from './devicesSizes';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background-color: aliceblue;
    
    -webkit-font-smoothing: antialised;
  }
  body,
  input,
  textarea,
  button {
    font-family: "Inter", sans-serif;
    font-size: 1rem; 
  }

  section {
    height: 100vh;
    display: flex;
  }

  h1 {
    font: 700 3.125rem / 3.8rem  "Inter", sans-serif;
  }

  h2 {
    font: 400 2,75rem / 3.3rem "Inter", sans-serif;
  }

  h3 {
    font: 400 2,375rem / 2.9rem "Inter", sans-serif;
  }

  h4 {
    font: 400 2rem / 2.42rem "Inter", sans-serif;
  }

  h5 { 
    font: 400 1.65rem / 1.96rem  "Inter", sans-serif;
  }

  h6 { 
    font: 400 1.25rem / 1.51rem  "Inter", sans-serif;
  }

  p {
    font: 400 1.12rem / 1.51rem "Inter", sans-serif
  }

  label {
    font: 400 1rem / 1.20rem  "Inter", sans-serif;
  }

  input {
  all: unset;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: all 15000s ease-in-out 0s;
} 


 @media (${device.tablet}) {
    html {
      font-size: 87.5%;
    }
  }
  `;
