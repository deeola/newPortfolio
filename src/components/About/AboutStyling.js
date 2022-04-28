import styled from "styled-components";

export const AboutContainer = styled.div`
display: flex;
height: 100vh;
width: 100%;
justify-content: space-between;
position: relative;
`;

//Left Section

export const LeftContainer = styled.div`
  width: 33.3333333333%;
  background-color: #293241;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderSkills = styled.div`
width: 85%;
  margin: 0px auto;
  padding: 40px 0px;
`

export const Header = styled.h1`
color: white;
font-size: 40px;
`


export const SkillTitle = styled.h4`
margin: 30px 0px; 
color: white;
`

export const Skills = styled.div`
margin: 30px 0px;
`
export const SkillWrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0px;
`

export const Skill = styled.p`
color: white;
  background-color: none;
  border: 1px solid white;
  padding: 15px 15px;
  transition: 300ms ease-in;
  width: 32%;
  text-align:center;
  font-size: 12px;  
  
`


//Right Section

export const RightContainer = styled.div`
  width: 66.6666666666%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
