import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//Home
export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  @media (max-width: 653px) {
    flex-direction: column;
  }
`;

export const MiddleRightContainer = styled.div`
  display: flex;
  width: 66.6666666666%;
  position: relative;

  @media (max-width: 843px) {
    width: 50%;
    flex-direction: column;
  }

  @media (max-width: 653px) {
    width: 100%;
    height: 70%;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
    height: 60%;
  }
`;

//LeftContainer

export const LeftContainerDiv = styled.div`
  width: 33.3333333333%;
  background-color: #293241;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 843px) {
    width: 50%;
  }

  @media (max-width: 653px) {
    width: 100%;
    height: 40%;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
    height: 40%;
  }
`;

export const LogoHamContainer = styled.div`
  opacity: 0;
  display: flex;
  width: 85%;
  margin: 0px auto;
  padding: 20px 0px;
  justify-content: space-between;
  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    // position : absolute;
    // z-index: 10;
    // top: 0;
    // left : 30px;
    // margin: 0px auto;
  }
`;

export const NLogoHamContainer = styled.div`
  display: none;

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    display: flex;
    width: 100%;
    margin: 0px auto;
    padding: 10px 0px;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled(Link)`
  width: 60px;
  display: flex;
  align-items: center;
  cursor: Pointer;
  text-decoration: none;

  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    width: 40px;
  }
`;

export const HamContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    width: 30px;
  }
`;

export const CloseHam = styled.img`
  display: none;
  width: 65%;
`;

export const NCloseHam = styled.img`
  display: none;
  width: 65%;
`;

export const OpenHam = styled.img`
  display: block;
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  padding: 0px 0px;

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    // padding: 0px 0px 20px 0px;
  }
`;

export const MyName = styled.div`
  color: white;
  font-family: "Exo 2", sans-serif;

  h1 {
    font-size: 3rem;
  }

  //Media Query

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    h1 {
      font-size: 39px;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const MyAboutMobile = styled.p`
  display: none;
  font-family: "Alegreya Sans", sans-serif;
  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    display: block;
    margin-top: 5px;
    color: #5390d9;
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const MyAbout = styled.div`
  margin-top: 20px;
  color: white;

  p {
    font-family: "Alegreya Sans", sans-serif;
    line-height: 22px;
    color: gray;
    span {
      color: #5390d9;
    }
  }

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    display: none;
  }
`;

export const LanguageOptions = styled.div`
  width: 85%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  margin-top: 40px;
  justify-content: space-between;

  @media (max-width: 843px) {
  }
  @media (max-width: 653px) {
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 0px;
  }
  @media (max-width: 375px) {
    margin-top: 10px;
  }
`;

const AnimateLine = keyframes`
    0% { margin-top: 0; height: 100%; }
    50% { margin-top: 100%; height: 0px; }
    51% { margin-top: 0%; height: 0px; }
    100% { height: 100%; margin-top: 0%;}


`;

const AnimateLineX = keyframes`
    0% { margin-left: 0; width: 100%; }
    50% { margin-left: 100%; width: 0px; }
    51% { margin-left: 0%; width: 0px; }
    100% { width: 100%; margin-left: 0%;}


`;

export const EmptyDivMobile = styled.div`
  display: none;

  @media (max-width: 653px) {
    height: 1px;
    width: 30%;
    display: block;
    position: relative;
    &:before {
      background: white;
      position: absolute;
      top: 0px;
      left: -1px;
      width: 100%;
      height: 100%;
      content: "";
      z-index: 0;
      box-shadow: none;
      overflow: hidden;
      animation: ${AnimateLineX} 2s 1;
      -moz-animation: ${AnimateLineX} 2s 1;
      -webkit-animation: ${AnimateLineX} 2s 1;
      -o-animation: ${AnimateLineX} 2s 1;
      animation-iteration-count: infinite;
      border-left: 0px solid #ae2b24;
      -webkit-transition: opacity 0.5s ease-out;
      -moz-transition: opacity 0.5s ease-out;
      -o-transition: opacity 0.5s ease-out;
      transition: opacity 0.5s ease-out;
    }
  }
`;

export const EmptyDiv = styled.div`
  height: 60px;
  width: 1px;
  position: relative;

  &:before {
    background: #5390d9;
    position: absolute;
    top: 0px;
    left: -1px;
    width: 1px;
    height: 100%;
    content: "";
    z-index: 0;
    box-shadow: none;
    overflow: hidden;
    animation: ${AnimateLine} 2s 1;
    -moz-animation: ${AnimateLine} 2s 1;
    -webkit-animation: ${AnimateLine} 2s 1;
    -o-animation: ${AnimateLine} 2s 1;
    animation-iteration-count: infinite;
    border-left: 0px solid #ae2b24;
    -webkit-transition: opacity 0.5s ease-out;
    -moz-transition: opacity 0.5s ease-out;
    -o-transition: opacity 0.5s ease-out;
    transition: opacity 0.5s ease-out;
  }

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    display: none;
  }
`;

export const LanguageDiv = styled.div`
  display: flex;


  img {
    width: 30px;
  }

  p {
    margin-left: 10px;
    color: white;
    font-weight :700;
    cursor:pointer;

    &:hover{
      color: #5390d9;
    }
  }

  //Media Query

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    margin-left: 0px;

    img {
      display: none;
    }

    p {
      margin-left: 0px;
      color: white;
    }
  }
`;

export const Languages = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 653px) {
    width: 60px;
  }
`;

export const Bottom = styled.div`
  opacity: 0;
  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

//MiddleContainer

export const TopContainer = styled.div`
  p {
    color: #5390d9;
    margin-top: 6px;
  }
  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    p {
      color: #5390d9;
      font-size: 0.7rem;
      padding: 0;
      display: inline;
    }
  }

  @media (max-width: 375px) {
  }
`;

export const TopContainerMR = styled.div`
  display: flex;
  justify-content: flex-start;
  align-item: top;
  position: relative;

  p {
    color: #5390d9;
    margin-top: 6px;
    margin-left: 10px;
    position: absolute;
    bottom: 0;
    transition: 1s ease-in-out;
    font-family: "Exo 2", sans-serif;
  }
  @media (max-width: 1056px) {
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 843px) {
    p {
      position: relative;
      margin-left: 0;
      // margin-top: 30px;
      font-size: 16px;
    }
  }

  @media (max-width: 653px) {
    p {
      color: #5390d9;
      font-size: 0.7rem;
      padding: 0;
      display: inline;
    }
  }

  @media (max-width: 375px) {
  }
`;

export const EmptyAnimatedDiv = styled.div`
  width: 2px;
  height: 100px;
  content: "";
  background-color: white;
  visibility: hidden;
  transition: 1s ease-in-out;
  @media (max-width: 843px) {
    display: none;
  }
`;



export const BottomContainer = styled.h1`
  font-size: 70px;
  font-weight: 700;
  color: #5390d9;
  opacity: 0;
  font-family: "Exo 2", sans-serif;

  @media (max-width: 1056px) {
    font-size: 2.9rem;
  }

  @media (max-width: 913px) {
    font-size: 2.7rem;
  }

  @media (max-width: 843px) {
    font-size: 3rem;
  }

  @media (max-width: 653px) {
    font-size: 2rem;
  }

  @media (max-width: 375px) {
  }
`;

export const DownloadCV = styled.a`
  color: white;
  background-color: none;
  border: 1px solid white;
  padding: 15px 15px;
  text-decoration: none;
  position: absolute;
  right: 20px;
  bottom: 40px;
  transition: 300ms ease-in;
  font-family: "Alegreya Sans", sans-serif;

  &:hover {
    background-color: #386cab;
    border: none;
    z-index : 2;
  }

  

`;


export const MiddleContainerDiv = styled(Link)`
  opacity: 0;
  width: 50%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #386cab;
  cursor: pointer;
  transition: 300ms ease-in;
  position: relative;

  &:hover {
    background-color: #5390d9;
  }

  &:hover ${BottomContainer} {
    color: white;
  }

  &:hover ${TopContainer} {
    p {
      color: white;
    }
  }

  &:hover ${DownloadCV} {
    background:yellow;
    z-index: 200 !important;
  }


  &:hover ${TopContainerMR} {
    p {
      color: white;
    }
  }

  &:hover ${EmptyAnimatedDiv} {
    visibility: visible;
    height: 120px;
  }

  @media (max-width: 843px) {
    width: 100%;
    height: 50%;
    background-color: white;
    border-bottom: 9px solid #5390d9;
  }

  @media (max-width: 653px) {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    border-bottom: 7px solid #5390d9;
    height: 80%;
  }

  @media (max-width: 375px) {
  }
`;


export const ProjectContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  @media (max-width: 843px) {
    margin-top: 30px;
  }

  @media (max-width: 653px) {
    margin-top: 0px;
  }

  @media (max-width: 375px) {
  }
`;

export const BottomMiddleContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  margin-bottom: 36px;
  display: flex;
  align-items: right;
  // position: relative;

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    display: none;
  }

  @media (max-width: 375px) {
  }
`;

export const NDownloadCV = styled.a`
  display: none;

  @media (max-width: 653px) {
    display: block;
    color: #293241;
    background-color: none;
    border: 2px solid #293241;
    padding: 15px 15px;
    text-decoration: none;
    transition: 300ms ease-in;
    z-index: 2;
    width: 50%;
    position: relative;
    margin: 150px 0 auto auto;
    text-align: center;
    font-weight: 700;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
    margin: 100px 0 0px auto;
    font-size: 10px;
  }
`;

//RightContainer

export const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: 300ms ease-in;
  &:hover {
    color: #5390d9;
  }
`;

export const IconLInk = styled.a`

`

export const EmptyRightDiv = styled.div`
  width: 35%;
  margin: 0px auto;
  margin-bottom: 36px;
  display: flex;
  align-items: right;
  justify-content: space-between;
  background-color: none;
  border: 1px solid #386cab;
  padding: 10px 15px;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 5px;
`;

export const RightContainerDiv = styled(Link)`
  opacity: 0;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  text-decoration: none;

  cursor: pointer;
  transition: 300ms ease-in;

  &:hover {
    background-color: #5390d9;
  }

  &:hover ${BottomContainer} {
    color: white;
  }

  &:hover ${TopContainer} {
    p {
      color: white;
    }
  }

  &:hover ${TopContainerMR} {
    p {
      color: white;
    }
  }
  &:hover ${EmptyAnimatedDiv} {
    visibility: visible;
    height: 120px;
  }

  &:hover ${EmptyAnimatedDiv} {
    display: block;
  }

  &:hover ${Icon} {
    color: white;
  }

  &:hover ${EmptyRightDiv} {
    color: white;
    border: 1px solid white;
  }

  @media (max-width: 843px) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 653px) {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    border-bottom: 7px solid #5390d9;
    height: 80%;
  }
  @media (max-width: 375px) {
  }
`;

export const BottomRightContainer = styled.div`
width :25%;
justify-content: space-between;
  display: flex;
  align-items: right;
  position: relative;

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {

  }
`;


export const MiddleOverlay = styled.div`

height: 40%;

// background:purple;
position: relative;


`


export const OverlayPicture = styled.svg`


position : absolute;
right: 0;
bottom:0;

background:red;
`
export const Group = styled.g`
background: blue;
display:flex;
align-self: right;
margin-left: 500px;

`


export const OverlayPictureR = styled.img`
position: absolute;
left: 0;
top: 0;



`