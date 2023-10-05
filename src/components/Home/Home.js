import React from "react";
import LeftContainer from "./LeftContainer";
import MiddleContainer from "./MiddleContainer";
import RightContainer from "./RightContainer";
import { HomeContainer, MiddleRightContainer } from "./Homestyling";


const Home = () => {
  return (
    <HomeContainer>
      <LeftContainer />
      <MiddleRightContainer>
        <MiddleContainer />
        <RightContainer />
        
      </MiddleRightContainer>
    </HomeContainer>
  );
};

export default Home;
