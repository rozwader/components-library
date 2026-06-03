import { createGlobalStyle } from 'styled-components';

import MontserratFont from './assets/MontserratFont.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratFont}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    *{
        font-family: "Montserrat", sans-serif;
    }
`;
