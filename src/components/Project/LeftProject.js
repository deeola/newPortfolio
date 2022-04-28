import React from "react";
import { LeftContainer, ProjectDescription, ProjectDetails, ProjectName, Tech, TechnologyUsed } from "./ProjectStyling";
import NavLogo from "../Shared/NavLogo";

const LeftProject = () => {
  return (
    <LeftContainer>
      <NavLogo />
      <ProjectDetails>
        <ProjectName>AudioPhile</ProjectName>
        <ProjectDescription>
          Audiophile is an e-commerce website. It is a frontend mentor guru
          challenge. Users are able to add/remove items from cart, edit product
          quantities in cart, receive form validations if fields are missed or
          incorrect during checkout and receive an order confirmation modal
          after checking out with an order summary. Made using REACT, REACT
          Hooks and styled using SASS.For state management, useContext API was
          used and data was fetched from a json file.
        </ProjectDescription>
        <TechnologyUsed>
          <Tech>React</Tech>
          <Tech>JAVASCRIPT</Tech>
          <Tech>R. Hooks</Tech>
          <Tech>SASS</Tech>
          <Tech>GIT</Tech>
          <Tech>UseContext</Tech>
          <Tech>JSON</Tech>
          <Tech>STORYBOOK</Tech>
        </TechnologyUsed>
      </ProjectDetails>
    </LeftContainer>
  );
};

export default LeftProject;

