import styled from "styled-components";

//Home
export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
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

  img {
    display: block;
    width: 100%;
  }
`;

export const HamContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;

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
  background-color: #5390d9 ;
  width: 3px;
  height: 100px;
`;

export const LanguageDiv = styled.div`
  display: flex;
  margin-left: 40px;

  img{
      width: 30px;
  }

  p{
      margin-left: 10px;
      color: white;

  }
`;


export const Bottom = styled.div`

`



//MiddleContainer

export const MiddleContainerDiv = styled.div`
  width: 33.3333333333%;
  background-color: #5390d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
`;

export const ProjectContainer = styled.div`
width: 85%;
margin: 0px auto;
`

export const TopContainer = styled.div``

export const BottomContainer = styled.h1`
font-size: 70px;
`

export const BottomMiddleContainer = styled.div`
width: 85%;
margin: 0px auto;
margin-bottom: 36px;
display: flex;
align-items: right;
background-color: green;
`

export const DownloadCV = styled.a`

color: white;
background-color: none;
border: 1px solid white;
padding: 10px 15px;
text-decoration: none;
position: right;


`

//RightContainer

export const RightContainerDiv = styled.div`
  width: 33.3333333333%;
  background-color: white;
  
`;
