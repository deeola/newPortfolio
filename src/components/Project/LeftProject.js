import React, { useContext, useRef, useEffect } from "react";
import {
  NextPrevIcons,
  Icon,
  Procontainer,
  ProjectDescription,
  ProjectDetails,
  Site,
  Tech,
  TechnologyUsed,
  TechUsed,
  Visit,
} from "./ProjectStyling";
import gsap from "gsap";
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
import { SharedLeftContainer, Title } from "../Shared/SharedStyles";
library.add(faCaretSquareLeft, faCaretSquareRight);

const LeftProject = () => {
  const portfolioContext = useContext(PortfolioContext);
  const { currents, locales, setProjectNext, setProjectPrev, hamOpen } =
    portfolioContext;

  const leftcont = useRef();

  useEffect(() => {
    gsap.from(leftcont.current, {
      x: -120,
      opacity: 1,
      duration: 0.2,
    });
  }, []);

  if (hamOpen) {
    gsap.to(leftcont.current, {
      zIndex: 1,
      duration: 0.1,
      position: "relative",
    });
  }

  return (
    <SharedLeftContainer primary ref={leftcont}>
      <NavLogo />
      <ProjectDetails>
        {AllProjects.map((project) =>
          project.key === currents + 1 ? (
            <Procontainer key={uuidv4()}>
              <Title>{project.name}</Title>
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
    </SharedLeftContainer>
  );
};

export default LeftProject;
