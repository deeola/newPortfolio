import React from 'react'
import LeftContainer from './LeftContainer';
import MiddleContainer from './MiddleContainer';
import RightContainer from './RightContainer';
import { HomeContainer } from './Homestyling';

const Home = () => {
  return (
    <HomeContainer>
        <LeftContainer />
        <MiddleContainer  />
        <RightContainer  />
    </HomeContainer>
  )
}

export default Home;

