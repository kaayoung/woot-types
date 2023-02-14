import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        font-weight: 600;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border: none;
        background-color: transparent;        
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    ol,
    ul {
        list-style: none;
    }

    :root {
        --NF-- : #4EBAA9 ;        
        --NT-- : #8570C2 ;        
        --SJ-- : #4D88D9 ;        
        --SP-- : #F79665 ;    
        --gray : #6f6f6f ;
        --lighter-gray : #f1f1f1 ; 
        --light-gray : #e3e3e3 ;
        --dark-blue : #384495 ;
        --white : #FBFBFB ;    
    }
`;

export default GlobalStyle;