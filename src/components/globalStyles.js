import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root {
--black: #000000; 
--primary: #006bff; 
--grey-bg: #fbfbfb; 
--grey: #cecece; 
--white: #ffffff; 
--desktop-h1: 900 5.625rem/5.625rem Inter; 
--desktop-h2: 900 3.25rem/4.0625rem Inter; 
--desktop-h3: 900 2.5rem/3rem Inter; 
--desktop-h4: 900 2rem/2.5rem Inter; 
--desktop-h5-black: 900 1.5rem/2rem Inter; 
--desktop-h5-medium: 500 1.5rem/2rem Inter; 
--desktop-body1-regular: 400 1.125rem/2.25rem Inter; 
--desktop-body1-medium: 500 1.125rem/2.25rem Inter; 
--desktop-body2-regular: 400 1rem/2rem Inter; 
--desktop-body2-bold: bold 1rem/2rem Inter; 
--desktop-body3-regular: 400 0.875rem/1.5rem Inter; 
--desktop-body3-semibold: bold 0.875rem/1.5rem Inter; 
--desktop-buttons: 700 0.875rem/1.75rem Inter; 
--mobile-h1: 900 3.125rem/3rem Inter; 
--mobile-h2: 900 2.5rem/4.045000076293945rem Inter; 
--mobile-h3: 900 2rem/3.2360000610351562rem Inter; 
--mobile-h4: 900 1.5rem/2.427000045776367rem Inter; 
--mobile-h4regular: 400 1.5rem/2.427000045776367rem Inter; 
--mobile-h5medium: 500 1.25rem/2.0225000381469727rem Inter; 
--mobile-h5black: 900 1.25rem/2.0225000381469727rem Inter; 
--mobile-body1regular: 400 1.125rem/1.8202500343322754rem Inter; 
--mobile-body1medium: 500 1.125rem/1.818750023841858rem Inter; 
--mobile-body2regular: 400 1rem/1.5rem Inter; 
--mobile-body2bold: 700 1rem/1.5rem Inter; 
}

body {
    display: flex;
    justify-content: center;
    margin: 0;
}

@media screen and (max-width: 414px) {
    display: grid;
    place-items: center;
    inline-size: 100%;
    max-inline-size: 24.37rem;
    block-size: 1fr;
    padding-inline: 1.12rem;
}

`



export default GlobalStyles
