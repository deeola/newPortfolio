import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
  position: relative;
  @media (max-width: 843px) {
  }

  @media (max-width: 653px) {
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  }
`;

//Left Section

// export const LeftContainer = styled.div`
//   width: 33.3333333333%;
//   background-color: #293241;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   @media (max-width: 1152px) {
//     width: 50%;
//   }

//   @media (max-width: 653px) {
//     width: 100%;
//     height: 50%;
//     justify-content: space-between;
//   }


//   //GALAXY-FOLD
//   @media (max-width: 285px) {
//   }
// `;

export const ProjectDetails = styled.div`
  width: 85%;
  margin: 0px auto;
  padding: 40px 0px;
  @media (max-width: 1152px) {
   
  }

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

export const Procontainer = styled.div``;

export const ProjectName = styled.h1`
  color: white;
  font-size: 40px;
  @media (max-width: 1152px) {
   
  }

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

export const ProjectDescription = styled.p`
  color: white;
  margin: 30px 0px;
  @media (max-width: 1152px) {
   
  }

  @media (max-width: 653px) {
    margin: 10px 0px;
    font-size : 11px;
  }

  @media (max-width: 375px) {
    margin: 5px 0px;
    font-size : 12px;
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
    margin: 4px 0px;
    font-size : 10px;
  }
`;

export const TechUsed = styled.p`
  color: #5390d9;
  margin-bottom: 10px;

  @media (max-width: 653px) {
    display : none; 
    
   }

   
`;

export const TechnologyUsed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: 1152px) {
   
  }



  @media (max-width: 653px) {
    
    display : none;
  }



  

  //GALAXY-FOLD
  @media (max-width: 285px) {
  }
`;

export const Tech = styled.p`
  border: 1px solid white;
  color: white;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 1152px) {
   
  }

  @media (max-width: 653px) {
 
    display : none;
  }


 
`;

export const Visit = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size : 14px;

  @media (max-width: 843px) {
    flex-direction: column;
    margin: 20px 0px;
   
  
  }

  @media (max-width: 653px) {
    flex-direction: row;
    margin: 5px 0px;
  }

  @media (max-width: 375px) {
  
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  }
`;

export const Site = styled.a`
  color: white;
  text-decoration: none;
  background-color: #5390d9;
  padding: 10px 15px;
  width: 30%;
  text-align: center;
  border-radius: 5px;
  @media (max-width: 843px) {
   width :100%;
   margin-top : 20px;
   padding: 15px;
  
  }

  @media (max-width: 653px) {
    font-size : 10px;
    padding: 10px;
    margin-top : 10px;
    width: 30%;
  }

  @media (max-width: 375px) {
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
    width: 32%;
    font-size : 10px;
    margin-top : 9px;
    padding: 2px;
  }
`;

//Right Project

export const ImageContainer = styled.div`
  padding: 0px 50px;
  @media (max-width: 653px) {
    padding: 0px 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 50px 0px 0px 0px;
  padding: 0px 30px;

  @media (max-width: 843px) {
    display: none;
  }

  @media (max-width: 653px) {
    display: flex;
    margin: 10px 0px 0px 0px;
   
   
  }
`;

export const Button = styled(FontAwesomeIcon)`
  background: none;
  outline: none;
  color: #5390d9;
  cursor: pointer;
  transition: 300ms ease-in;
  border-radius: 5px;
  width: 20%;
  font-weight: 700;
  font-size: 50px;

  &: hover {
    background-color: #5390d9;
    color: white;
  }

  @media (max-width: 843px) {
    font-size: 12px;
    width: 42%;
  }

  @media (max-width: 653px) {
   font-size: 40px;
   width: 20%;
   
   padding: 0px;
   }
 
   @media (max-width: 375px) {
    
   }
`;

export const NextPrevIcons = styled.div`
  display: none;

  @media (max-width: 843px) {
    display: flex;
    padding : 20px 0px; 
    justify-content: space-between;
    width : 50%;
    margin :auto;
  }

  @media (max-width: 653px) {
   display: none;
  }

  @media (max-width: 375px) {
   
  }

  //GALAXY-FOLD
  @media (max-width: 285px) {
  }
`;
export const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 40px;
`;
