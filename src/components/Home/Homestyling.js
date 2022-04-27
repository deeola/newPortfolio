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
`


export const MyName = styled.div`
  color: white;

  h1{

  }
`;

export const MyAbout = styled.div`
  color: white;
  p{


      span{

      }
  }
`;

//MiddleContainer

export const MiddleContainerDiv = styled.div`
  width: 33.3333333333%;
  background-color: #5390d9;
`;
//RightContainer

export const RightContainerDiv = styled.div`
  width: 33.3333333333%;
  background-color: white;
`;
