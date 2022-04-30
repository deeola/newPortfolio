import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//Home
export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
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

  @media (max-width: 843px) {
    width: 50%;
    flex-direction: column;
  }

  @media (max-width: 653px) {
    height: 60vh;
    width: 100%;
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
    height: 40vh;
  }
`;

export const LogoHamContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0px auto;
  padding: 20px 0px;
  justify-content: space-between;
  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
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
  width: 80%;
  filter: invert(100%) sepia(0%) saturate(7433%) hue-rotate(231deg)
    brightness(107%) contrast(100%);
`;

export const OpenHam = styled.img`
  display: block;
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  padding: 20px 0px;

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    font-size: 16px;
    padding: 0px 0px 20px 0px;
  }
`;

export const MyName = styled.div`
  color: white;

  h1 {
    font-size: 3rem;
  }

  //Media Query

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 2.3rem;
    }
  }
`;

export const MyAboutMobile = styled.p`
  display: none;

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    display: block;
    margin-top: 5px;
    color: #5390d9;
    text-align: left;
    font-size: 16px;
  }
`;

export const MyAbout = styled.div`
  margin-top: 20px;
  color: white;
  p {
    line-height: 25px;
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
  @media (max-width: 843px) {
  }
  @media (max-width: 653px) {
    font-size: 16px;
    justify-content: space-between;
    // margin-bottom : 20px;
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

    height: 50px;
  }

  @media (max-width: 375px) {
    height: 45px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
    height: 40px;
  }
`;

export const LanguageDiv = styled.div`
  display: flex;
  margin-left: 40px;

  img {
    width: 30px;
  }

  p {
    margin-left: 10px;
    color: white;
  }

  //Media Query

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    margin-left: 12px;
    display: inline-block;
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
`;

export const Bottom = styled.div`
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
`;

export const BottomContainer = styled.h1`
  font-size: 70px;
  font-weight: 700;
  color: #5390d9;
`;

export const MiddleContainerDiv = styled(Link)`
  width: 50%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #386cab;
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

  @media (max-width: 843px) {
    width: 100%;
    height: 50%;
    background-color: white;
    border-bottom: 9px solid #5390d9;
  }

  @media (max-width: 653px) {
    height: 80%;
  }
`;

export const ProjectContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    display: none;
  }
`;

export const BottomMiddleContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  margin-bottom: 36px;
  display: flex;
  align-items: right;
  position: relative;

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    display: none;
  }
`;

export const DownloadCV = styled.a`
  color: white;
  background-color: none;
  border: 1px solid white;
  padding: 15px 15px;
  text-decoration: none;
  position: absolute;
  right: 0;
  bottom: 5px;
  transition: 300ms ease-in;
  z-index: 2;

  &:hover {
    background-color: #386cab;
    border: none;
  }
`;

//RightContainer

export const Icon = styled(FontAwesomeIcon)`
  color: #386cab;
  font-size: 30px;
  cursor: pointer;
  transition: 300ms ease-in;
  &:hover {
    color: #5390d9;
  }
`;

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
    background: red;
    height: 20%;
  }
`;

export const BottomRightContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  display: flex;
  align-items: right;
  position: relative;

  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    display: none;
  }
`;
