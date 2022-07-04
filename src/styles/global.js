import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    html, body, :root {
        min-height: 100%auto;
        
    }

    body{
        background-color: ${(props) => props.theme.color.background};
        color: ${(props) => props.theme.color.text};
    }

    
.btn{
    background: ${(props) => props.theme.color.background};
    border: ${(props) => props.theme.color.borderCard};
    transition: all 0.5s easy;
    
    
}
.btn:hover{
    -webkit-box-shadow: 10px 10px 5px 0px ${(props) => props.theme.color.backgroundCard};
-moz-box-shadow: 10px 10px 5px 0px ${(props) => props.theme.color.backgroundCard};
box-shadow: 0px 5px 10px 0px ${(props) => props.theme.color.backgroundCard};
}

.contCard{
    background: ${(props) => props.theme.color.background};
    border: ${(props) => props.theme.color.borderCard};
    transition: all 0.5s easy;
    
    
}

`;