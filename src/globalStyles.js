import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
  *{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Open Sans', sans-serif;
  
  }

  img{
    display: block;
  }




html, body { 
  overflow:hidden;
    margin:0;
    padding:0;
    /*Avoid flicker on slides transitions for mobile phones #336 */
    -webkit-tap-highlight-color: rgba(0,0,0,0);
 }

 html{
  height: -webkit-fill-available;
 }



 body, .App, .App>div, #root{
  height: 100%;
  min-height: -webkit-fill-available;
 }
 

 


`;

export default GlobalStyle;
