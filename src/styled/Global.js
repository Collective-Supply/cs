import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        color: #333;
        margin: 0;
        font-family: sans-serif;
        font-weight: 300;
    }

    h1, h2 {
        /* margin-bottom: 2rem; */
        
    }

    h1 {
        font-size: 1.4rem;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    button {
        background-color: #1200E4;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        min-width: 200px;
        transition-duration: 0.4s;
    }

        button:hover {
            background-color: #2418AC;
        color: white;
    }

`