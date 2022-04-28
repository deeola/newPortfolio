import React from "react";
import LeftProject from "./LeftProject";
import RightProject from "./RightProject";
import {
 
  ProjectContainer,
 
} from "./ProjectStyling";

const Project = () => {
  return (
    <ProjectContainer>
      <LeftProject />
      <RightProject />
    </ProjectContainer>
  );
};

export default Project;

