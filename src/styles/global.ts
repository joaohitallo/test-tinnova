import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // font-size : 16px (desktop)
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; // 15 px
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14 px
        }
    }
    
`