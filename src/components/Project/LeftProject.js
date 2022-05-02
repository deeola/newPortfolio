import React, { useContext } from "react";
import {
  LeftContainer,
  NextPrevIcons,
  Icon,
  Procontainer,
  ProjectDescription,
  ProjectDetails,
  ProjectName,
  Site,
  Tech,
  TechnologyUsed,
  TechUsed,
  Visit,
} from "./ProjectStyling";
import NavLogo from "../Shared/NavLogo";
import AllProjects from "./Allprojects";
import { v4 as uuidv4 } from "uuid";
import PortfolioContext from "../../context/portfolioContext";
import translate from "../../i18nProvider/translate";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretSquareLeft,
  faCaretSquareRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCaretSquareLeft, faCaretSquareRight);

const LeftProject = () => {
  const portfolioContext = useContext(PortfolioContext);
  const { currents, locales, setProjectNext, setProjectPrev } =
    portfolioContext;

  return (
    <LeftContainer>
      <NavLogo />
      <ProjectDetails>
        {AllProjects.map((project, key) =>
          project.key === currents + 1 ? (
            <Procontainer key={uuidv4()}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>
                {locales === "en-US" ? project.desc.en : project.desc.de}
              </ProjectDescription>
              <TechUsed>{translate("techused")}</TechUsed>
              <TechnologyUsed>
                {project.tech.map((tech) => (
                  <Tech key={uuidv4()}>{tech}</Tech>
                ))}
              </TechnologyUsed>
              <Visit>
                {project.links.map((link) => (
                  <Site key={uuidv4()} href={link.href}>
                    {link.name}
                  </Site>
                ))}
              </Visit>
            </Procontainer>
          ) : (
            ""
          )
        )}

        <NextPrevIcons>
          <Icon onClick={setProjectPrev} icon={faCaretSquareLeft} />
          <Icon onClick={setProjectNext} icon={faCaretSquareRight} />
        </NextPrevIcons>
      </ProjectDetails>
    </LeftContainer>
  );
};

export default LeftProject;
