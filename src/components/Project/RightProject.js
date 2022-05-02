import React, { useContext, useState, useEffect } from "react";
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
import LoadingScreen from "../Shared/LoadingScreen";
library.add(faCaretSquareLeft, faCaretSquareRight)




const RightProject = () => {
  const portfolioContext = useContext(PortfolioContext);
  const { setProjectNext, setProjectPrev, currents } = portfolioContext;

   // Set loading state to true initially
const [loading, setLoading] = useState(true);
      
useEffect(() => {
  // Loading function to load data or 
  // fake it using setTimeout;
  const loadData = async () => {

    // Wait for two second
    await new Promise((r) => setTimeout(r, 1000));

    // Toggle loading state
    setLoading((loading) => !loading);
  };
    
  loadData();
}, [])

  

  return (
    <RightContainer>

      {
        loading ? <LoadingScreen  height={'unset'}  /> : <ImageContainer>
        {AllProjects.map((project) =>
          project.key === currents + 1 ? 
          <div>
                 : <Image key={uuidv4()} src={project.img} alt="img" />
          </div>
            
            
           : (
            ""
          )
        )}
      </ImageContainer>
      }
      
      
      <Buttons>
        <Button onClick={setProjectPrev} icon={faCaretSquareLeft} />
        <Button onClick={setProjectNext} icon={faCaretSquareRight} />
        <Icon />
      </Buttons>
    </RightContainer>
  );
};

export default RightProject;





