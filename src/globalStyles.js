import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400&family=Exo+2:wght@200;300;400;600;700&family=Itim&display=swap');
  *{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    
 
  
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
