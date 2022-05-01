import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  position: relative;

  @media (max-width: 653px) {
    flex-direction: column;
  }
`;

//Left Section

export const LeftContainer = styled.div`
  width: 33.3333333333%;
  background-color: #293241;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1152px) {
    width: 50%;
  }

  @media (max-width: 653px) {
    width: 100%;
    height:45%;
  }

  @media (max-width: 375px) {
    height:40%;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  }
`;

export const HeaderSkills = styled.div`
  width: 85%;
  margin: 0px auto;
  padding: 40px 0px;

  @media (max-width: 653px) {
    padding: 20px 0px;
  }

  @media (max-width: 375px) {
    padding: 10px 0px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  }

`;

export const Header = styled.h1`
  color: white;
  font-size: 40px;
  @media (max-width: 653px) {
    font-size: 30px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  }
`;

export const SkillTitle = styled.h4`
  margin: 30px 0px;
  color: white;

  @media (max-width: 653px) {
    margin: 10px 0px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
    font-size: 12px;
  }
`;

export const Skills = styled.div`
  margin: 30px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  @media (max-width: 843px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 653px) {
    margin: 10px 0px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;

  }

  @media (max-width: 375px) {
    margin: 7px 0px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {

  }
`;
export const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

export const Skill = styled.p`
  color: white;
  background-color: none;
  border: 1px solid white;
  padding: 15px 15px;
  transition: 300ms ease-in;
  width: 100%;
  text-align: center;
  font-size: 12px;
  

  @media (max-width: 843px) {
    font-size: 12px;
  }

  @media (max-width: 653px) {
    font-size: 10px;
    padding: 10px 5px;   
    border: unset; 
    background: #5390d9;
  }

  @media (max-width: 375px) {
    font-size: 8px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
    font-size: 6px;
  }
`;

//Right Section

export const RightContainer = styled.div`
  width: 66.6666666666%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1152px) {
    width: 50%;
  }

  @media (max-width: 653px) {
    width: 100%;
    height :70%;
    border-bottom: 5px solid #5390d9;
  
  }

  @media (max-width: 375px) {
    height :60%;
  
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  
  }
`;

export const TextManagementWrapper = styled.div`
  width: 70%;
  @media (max-width: 653px) {
    width: 85%;
  }
`;

export const TextWrapper = styled.p`
  color: #5390d9;
  line-height: 23px;
  margin: 10px 0px;
  @media (max-width: 843px) {
    text-align: center;
  }

  @media (max-width: 653px) {

    line-height: 26px;
  }

  @media (max-width: 375px) {
    line-height: unset;
    font-size: 12px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  
  }
`;

export const Management = styled.div``;

export const ToolsTitle = styled.h5`
  margin: 20px 0px;
  color: #293241;

  @media (max-width: 843px) {
    text-align: center;
  }

  @media (max-width: 653px) {

    margin: 5px 0px;
  }

  @media (max-width: 375px) {
    font-size: 10px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  
  }
  
`;

export const ToolsWrapper = styled.div`
  margin: 30px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: 843px) {
    grid-template-columns: 1fr 1fr 1fr ;
  }

  @media (max-width: 653px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
    margin: 10px 0px;
  }

  @media (max-width: 375px) {
    margin: 10px 0px;
  }



  //GALAXY-FOLD
  @media (max-width: 285px) {
  }
`;


export const Tool = styled.p`
  color: #5390d9;
  background-color: none;
  border: 1px solid #5390d9;
  padding: 15px 15px;
  transition: 300ms ease-in;
  width: 100%;
  text-align: center;
  font-size: 12px;

  @media (max-width: 375px) {
    padding: 10px 5px;
    font-size : 8px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  }
`;

export const OpenSource = styled.a`
  color: #293241;
  margin: 20px 0px;

  @media (max-width: 843px) {
    text-align: center;
    width:100%;
  }

  @media (max-width: 653px) {
    margin: 10px 0px;

  }

  @media (max-width: 375px) {
    font-size : 10px;
  }

`;
