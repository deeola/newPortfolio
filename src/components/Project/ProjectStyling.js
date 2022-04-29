import styled from 'styled-components';

export const ProjectContainer = styled.div`
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




export const ProjectDetails = styled.div`

  width: 85%;
  margin: 0px auto;
  padding: 40px 0px;

  `

export const Procontainer = styled.div`
`

export const ProjectName = styled.h1`
color: white;
font-size: 40px;
`

export const ProjectDescription = styled.p`
color: white;
margin: 30px 0px; 
`

export const TechUsed = styled.div`
color: #5390d9;
margin-bottom : 10px;
`

export const TechnologyUsed = styled.div`

display: grid;
grid-template-columns:  1fr 1fr 1fr;
grid-gap: 10px;
`

export const Tech = styled.p`
border: 1px solid white;
color: white;
padding: 10px;
text-align: center;
text-transform: uppercase;
`


export const Visit = styled.div`
margin: 30px 0px ;
display: flex;
flex-direction: column; 
// align-items: center;
`

export const Site = styled.a`
color: white; 
text-decoration: none;
background-color: #5390d9;
padding: 10px 15px;
margin: 20px 0px 0px 0px;
width: 50%;
text-align: center;
border-radius: 5px;
`


//Right Project

export const RightContainer = styled.div`
  width: 66.6666666666%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const ImageContainer = styled.div`

`

export const Buttons = styled.div`

`


export const Image = styled.img``

export const Button = styled.button``