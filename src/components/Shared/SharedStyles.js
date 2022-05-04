import styled from "styled-components";

// Containers

//LeftContainer

export const SharedRightContainer = styled.div`
  width: 66.6666666666%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.primary ? "column" : "unset")};

  @media (max-width: 1152px) {
    width: 50%;
  }

  @media (max-width: 653px) {
    width: 100%;
    height: ${(props) => (props.primary ? "70%" : "50%")};
    border-bottom: 5px solid #5390d9;
  }

  @media (max-width: 375px) {
    height: 60%;
  }
`;

//Left

export const SharedLeftContainer = styled.div`
  width: 33.3333333333%;
  background-color: #293241;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1152px) {
    width: 50%;
  }

  @media (max-width: 653px) {
    width: 100%;
    height: ${(props) => (props.primary ? "70%" : "45%")};
  }

  @media (max-width: 375px) {
    height: 40%;
  }
`;

//Texts

export const Title = styled.h1`
  color: white;
  font-size: 40px;
  font-family: 'Exo 2', sans-serif;

  @media (max-width: 653px) {
    font-size: 30px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  }
`;

//Buttons
