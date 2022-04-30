import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarContainer = styled.div`
width: 66.6666666667%;
background-color: white;
margin: auto 0px auto auto;
position: absolute;
top: 0;
right: 0;
height: 100vh;
padding: 140px;
@media (max-width: 843px) {
    width: 50%;
    padding: 40px;
    padding-top: 200px;
  }

  @media (max-width: 653px) {
    width: 100%;
    padding: 20px;

  }

  @media (max-width: 375px) {
  }
`

export const UnorderedList = styled.ul`

width: 100%;
display: flex;
flex-direction: column;

@media (max-width: 653px) {
   text-align: right;
   margin-top : 70px;

  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
    margin-top : 50px;
  }

`

export const List = styled(Link)`

color:  #5390d9;
list-style: none;
font-size: 50px;
font-weight: 800;
cursor: pointer;
margin-bottom: 5px;
text-decoration: none;

//GALAXY-FOLD
  @media (max-width: 285px) {
    font-size: 40px;
  }

`


