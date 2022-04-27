import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Home
export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
  position: relative;
`;

//LeftContainer

export const LeftContainerDiv = styled.div`
  width: 33.3333333333%;
  background-color: #293241;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
`;

export const LogoHamContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0px auto;
  padding: 20px 0px;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  cursor: Pointer;

  img {
    display: block;
    width: 100%;
  }
`;

export const HamContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  padding: 20px 0px;
`;

export const MyName = styled.div`
  color: white;

  h1 {
    font-size: 60px;
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
`;

export const LanguageOptions = styled.div`
  width: 85%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const EmptyDiv = styled.div`
  background-color: white;
  width: 3px;
  height: 100px;
  visibility: hidden;
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
`;

export const Bottom = styled.div``;

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
  color:  #5390d9;
`;

export const MiddleContainerDiv = styled.div`
  width: 33.3333333333%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #386cab;
  cursor:pointer;
  transition: 300ms ease-in;
  &:hover {
    background-color:  #5390d9;
  
  }

  &:hover ${BottomContainer} {
    color: white;
  
  }

  &:hover ${TopContainer } {

    p{
        color: white;
   
    }
   
  }

 
`;

export const ProjectContainer = styled.div`
  width: 85%;
  margin: 0px auto;
`;



export const BottomMiddleContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  margin-bottom: 36px;
  display: flex;
  align-items: right;
  background-color: green;
  position: relative;
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

  &:hover {
    background-color:  #386cab;
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



export const RightContainerDiv = styled.div`
  width: 33.3333333333%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  cursor: pointer;
  transition: 300ms ease-in;

  &:hover {
    background-color:  #5390d9;
  }

  &:hover ${BottomContainer} {
    color: white;
  }

  &:hover ${TopContainer } {

    p{
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
`;



export const BottomRightContainer = styled.div`
  width: 85%;
  margin: 0px auto;
  display: flex;
  align-items: right;
  position: relative;
`;
