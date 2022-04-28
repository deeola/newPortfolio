import React, { useContext } from "react";
import {
  LeftContainer,
  ProjectDescription,
  ProjectDetails,
  ProjectName,
  Site,
  Tech,
  TechnologyUsed,
  Visit,
} from "./ProjectStyling";
import NavLogo from "../Shared/NavLogo";
import AllProjects from "./Allprojects";
import { v4 as uuidv4 } from "uuid";
import PortfolioContext from "../../context/portfolioContext";



const LeftProject = () => {

  const portfolioContext = useContext(PortfolioContext)
  const {currents} = portfolioContext
  

  return (
    <LeftContainer>
      <NavLogo />
      <ProjectDetails>
        {AllProjects.map((project, key ) =>
          project.key === currents + 1 ? (
            <div key={uuidv4()}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.desc}</ProjectDescription>

              {project.tech.map((tech) => (
                <TechnologyUsed key={uuidv4()}>
                  <Tech>{tech}</Tech>
                </TechnologyUsed>
              ))}

              {project.links.map((link) => (
                <Visit key={uuidv4()}>
                  <Site href={link.href}>{link.name}</Site>
                </Visit>
              ))}
        
            </div>
          ) : (
            ""
          )
        )}
        

       
      </ProjectDetails>
    </LeftContainer>
  );
};

export default LeftProject;
