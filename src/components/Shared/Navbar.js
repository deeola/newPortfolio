import React, { useContext, useRef, useEffect } from "react";
import { List, NavbarContainer, UnorderedList,ListContainer  } from "./NavbarStyled";
import PortfolioContext from "../../context/portfolioContext";
import translate from "../../i18nProvider/translate";
import BlueNavLogo from "./BlueNavLogo";
import { NDownloadCV } from "../Home/Homestyling";
import gsap from "gsap";

const Navbar = () => {
  const portfolioContext = useContext(PortfolioContext);
  const { ulDisplay, closeMenu, hamOpen } = portfolioContext;

  // const styling



  const navcontainer = useRef();
  const homeli = useRef();
  const aboutli = useRef();
  const contactli = useRef();
  const projectli = useRef();

  const All = [
    homeli.current,
    aboutli.current,
    contactli.current,
    projectli.current,
  ];

useEffect(() => {
  All.forEach((item) => {
    gsap.from(item, {
      duration: 1.8,
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 7,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    });
  });
 //eslint-disable-next-line
},[])





  let tween = gsap.fromTo(
    navcontainer.current,
    {
      duration: 2,
      x: -700,
    },
    {
      background: "white",
      x: 0,
    }
  );

  if (hamOpen) {
    tween.play();
  }

  return (
    <NavbarContainer ref={navcontainer} style={ulDisplay()}>
      <BlueNavLogo />
      <UnorderedList>
        <ListContainer >
          <List ref={homeli} onClick={closeMenu} to="/">
            {translate("navhome")}
          </List>
        </ListContainer>
        <ListContainer >
          <List ref={projectli} onClick={closeMenu} to="/projects">
            {translate("navproject")}
          </List>
        </ListContainer>
        <ListContainer >
          <List ref={aboutli} onClick={closeMenu} to="/about">
            {translate("navabout")}
          </List>
        </ListContainer>
        <ListContainer  >
          <List ref={contactli} onClick={closeMenu} to="/contact">
            {translate("navcontact")}
          </List>
        </ListContainer>
      </UnorderedList>
      <NDownloadCV>{translate("download")}</NDownloadCV>
    </NavbarContainer>
  );
};

export default Navbar;
