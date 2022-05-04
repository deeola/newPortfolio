import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import {
  BottomContainer,
  BottomMiddleContainer,
  DownloadCV,
  EmptyAnimatedDiv,
  MiddleContainerDiv,
  MiddleOverlay,
  OverlayPicture,
  ProjectContainer,
  TopContainerMR,
  Group
} from "./Homestyling";
import translate from "../../i18nProvider/translate";
import resume from "../../assets/resume.pdf";
import overlayimage from "../../assets/blogo.png";

const MiddleContainer = () => {
  //get refs

  const middlecont = useRef();
  const projectRef = useRef();

  useEffect(() => {
    gsap.to(middlecont.current, {
      opacity: 1,
      duration: 0.15,
    });

    gsap.to(projectRef.current, {
      opacity: 1,
      duration: 0.2,
    });
  }, []);

  return (
    <MiddleContainerDiv to="/projects" ref={middlecont}>
      <ProjectContainer>
        <TopContainerMR>
          <EmptyAnimatedDiv />
          <p> {translate("sample")}</p>
        </TopContainerMR>
        <BottomContainer ref={projectRef}>
          {" "}
          {translate("project")}
        </BottomContainer>
      </ProjectContainer>
      {/* <BottomMiddleContainer>
        <DownloadCV href={resume}  download='cv' target={'_blank'}>{translate("download")}</DownloadCV>
      </BottomMiddleContainer> */}

      {/* <MiddleOverlay>
        <OverlayPicture
          width="259"
          height="307"
          viewBox="0 0 59 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Group id="Group 20">
            
            <g id="Group 16">
              <g id="Group 18">
                <g id="Group 15">
                  <path
                    id="B"
                    d="M44.448 58.552C49.12 59.128 52.576 60.632 54.816 63.064C57.12 65.432 58.272 68.376 58.272 71.896C58.272 75.416 56.96 78.744 54.336 81.88C51.776 85.016 48.48 87.448 44.448 89.176C42.656 89.88 40.288 90.392 37.344 90.712C34.464 91.032 31.488 91.192 28.416 91.192C23.296 91.192 18.048 90.712 12.672 89.752C11.712 89.56 10.688 89.08 9.6 88.312C8.576 87.544 8.064 86.424 8.064 84.952C8 79.064 7.776 70.872 7.392 60.376L7.296 55.096C7.04 46.904 6.912 40.472 6.912 35.8C6.912 34.968 7.392 34.008 8.352 32.92C9.376 31.768 10.592 31.128 12 31C12.832 31 13.632 30.968 14.4 30.904C21.632 30.2 26.464 29.848 28.896 29.848C33.696 29.848 37.92 30.328 41.568 31.288C45.28 32.184 48.352 33.848 50.784 36.28C51.68 37.304 52.416 38.616 52.992 40.216C53.568 41.752 53.856 43.256 53.856 44.728C53.92 47.864 53.088 50.744 51.36 53.368C49.696 55.992 47.392 57.72 44.448 58.552ZM29.472 38.008C27.296 38.008 25.024 38.136 22.656 38.392C20.352 38.648 18.4 38.968 16.8 39.352L17.376 57.496L20.832 57.4C26.4 56.824 30.496 56.344 33.12 55.96C34.784 55.576 36.416 54.84 38.016 53.752C39.616 52.6 40.928 51.416 41.952 50.2C43.04 48.92 43.584 47.96 43.584 47.32C43.584 46.36 43.392 45.4 43.008 44.44C42.624 43.416 42.208 42.68 41.76 42.232C40.032 40.568 38.272 39.448 36.48 38.872C34.688 38.296 32.352 38.008 29.472 38.008ZM17.664 82.744C20.928 83.192 24.032 83.416 26.976 83.416C33.44 83.416 38.528 82.584 42.24 80.92C46.016 79.192 47.904 75.928 47.904 71.128C47.904 69.208 46.464 67.608 43.584 66.328C40.704 65.048 37.6 64.408 34.272 64.408C32.032 64.408 29.184 64.664 25.728 65.176C22.976 65.56 20.288 65.816 17.664 65.944C17.792 69.784 17.856 72.216 17.856 73.24C17.856 75.224 17.824 76.728 17.76 77.752L17.664 82.744Z"
                    fill="#5390D9"
                    fill-opacity="0.24"
                  />
                </g>
              </g>
            </g>
          </Group>
        </OverlayPicture>
      </MiddleOverlay> */}
    </MiddleContainerDiv>
  );
};

export default MiddleContainer;
