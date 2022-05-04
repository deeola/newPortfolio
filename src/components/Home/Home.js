import React from "react";
import LeftContainer from "./LeftContainer";
import MiddleContainer from "./MiddleContainer";
import RightContainer from "./RightContainer";
import { HomeContainer, MiddleRightContainer, MiddleOverlay, OverlayPicture } from "./Homestyling";
import overlayimage from '../../assets/bluelogo.png'

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
