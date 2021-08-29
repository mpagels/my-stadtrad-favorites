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

.leaflet-container {
    width: 100vw;
    height: 300px;
}

@font-face {
    font-family: "Montserrat"; 
    src: url('/fonts/montserrat-v15-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/montserrat-v15-latin-100.woff') format('woff'); /* Modern Browsers */
    font-style: medium; 
    font-weight: 100; 
    font-display: swap; 
}

@font-face {
    font-family: "Montserrat"; 
    src: url('/fonts/montserrat-v15-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/montserrat-v15-latin-200.woff') format('woff'); /* Modern Browsers */
    font-style: medium; 
    font-weight: 200; 
    font-display: swap; 
}

@font-face {
    font-family: "Montserrat"; 
    src: url('/fonts/montserrat-v15-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/montserrat-v15-latin-300.woff') format('woff'); /* Modern Browsers */
    font-style: medium; 
    font-weight: 300; 
    font-display: swap; 
}

@font-face {
    font-family: "Montserrat"; 
    src: url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/montserrat-v15-latin-regular.woff') format('woff'); /* Modern Browsers */
    font-style: medium; 
    font-weight: 400; 
    font-display: swap; 
}

@font-face {
    font-family: "Montserrat"; 
    src: url('/fonts/montserrat-v15-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/montserrat-v15-latin-500.woff') format('woff'); /* Modern Browsers */
    font-style: medium; 
    font-weight: 500; 
    font-display: swap; 
}

@font-face {
    font-family: "Montserrat"; 
    src: url('/fonts/montserrat-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/montserrat-v15-latin-600.woff') format('woff'); /* Modern Browsers */
    font-style: medium; 
    font-weight: 600; 
    font-display: swap; 
}

@font-face {
    font-family: "Montserrat"; 
    src: url('/fonts/montserrat-v15-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
         url('/fonts/montserrat-v15-latin-700.woff') format('woff'); /* Modern Browsers */
    font-style: medium; 
    font-weight: 700; 
    font-display: swap; 
}`
