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
  Icon
} from "./ProjectStyling";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretSquareLeft, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
library.add(faCaretSquareLeft, faCaretSquareRight)




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
        <Button onClick={setProjectPrev} icon={faCaretSquareLeft} />
        <Button onClick={setProjectNext} icon={faCaretSquareRight} />
        <Icon />
      </Buttons>
    </RightContainer>
  );
};

export default RightProject;

