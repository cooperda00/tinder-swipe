import { createGlobalStyle } from "styled-components";

/*
Josh's Custom CSS Reset
https://www.joshwcomeau.com/css/custom-css-reset/
*/
const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html {
        // 1rem = 10px
        // 62.5*16px(base) = 10px   
        font-size: 62.5%;
    }

    html, body {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }
`;

export default GlobalStyle;
