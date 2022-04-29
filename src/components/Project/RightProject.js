import React, { useContext } from "react";
import PortfolioContext from "../../context/portfolioContext";
import AllProjects from "./Allprojects";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Buttons,
  Image,
  ImageContainer,
  RightContainer,
} from "./ProjectStyling";

const RightProject = () => {
  const portfolioContext = useContext(PortfolioContext);
  const { setProjectNext, setProjectPrev, currents } = portfolioContext;

  return (
    <RightContainer>
      <ImageContainer>
        {AllProjects.map((project) =>
          project.key === currents + 1 ? (
            <Image key={uuidv4()} src={project.img} alt="img" />
          ) : (
            ""
          )
        )}
      </ImageContainer>
      <Buttons>
        <Button onClick={setProjectNext}>Next Project</Button>
        <Button onClick={setProjectPrev}>Previous Project</Button>
      </Buttons>
    </RightContainer>
  );
};

export default RightProject;
