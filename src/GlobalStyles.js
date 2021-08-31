import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 112.5%;
    font-family: "Montserrat", sans-serif;
    overflow-x: hidden;
}

#root {
    display: grid;
    grid-template-rows: 75px auto 75px;
    height: 100vh;
}
:root {
    --main-brand-background: #008c9e;
    --primary-brand-highlight: #fdc851;
    --primary-brand-highlight-hover: #FDC135;
    --secondary-brand-background: #ffffff;

    --primary-font-color: #525252; 
    --secondary-font-color: #ffffff;
    
    --button-shadow: 0px 3px 6px #00000029;
    --button-shadow-focused: tba;
}
`
