import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    border: none;
    font-family: 'Advent Pro', sans-serif;
}

:root{
    //Colors
    --color-primary: #FF6C22;
    --color-secondary: #2EAFB2;

    --color-white: #FFFFFF;
    --color-black: #000000;

    //Grey text
    --color-text-grey: rgba(0, 0, 0, 0.44);

    //Background Colors
    --color-bg-home: #E5E5E5;

    //Border radius
    --border-radius: 5px;
}
`;
