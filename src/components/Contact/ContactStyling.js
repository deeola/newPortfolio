import styled from 'styled-components';




export const ContactContainer = styled.div`
display: flex;
width: 100%;
position: relative;
@media (max-width: 843px) {

}

@media (max-width: 653px) {

  flex-direction:column;
 

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
//     height:40%;
//   }

//   @media (max-width: 375px) {
//     height:40%;
//   }

//   //GALAXY-FOLD
//   @media (max-width: 285px) {
//   }
  
// `;


export const SimpleContact = styled.div`
 width: 85%;
  margin: 0px auto;
  padding: 2.5rem 0rem;

  @media (max-width: 653px) {
    padding: 0px 0px;
  }

`

export const ContactTitle = styled.h1`
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
`


export const ContactSubText = styled.p`
margin: 30px 0px; 
color: white;

@media (max-width: 843px) {
  margin: 1rem 0rem; 
}

@media (max-width: 653px) {

  margin: 10px 0px 0px 0px; 
  font-size: 14px;  

}

@media (max-width: 375px) {
  margin: 10px 0px; 
  font-size: 12px;  
}

//GALAXY-FOLD
@media (max-width: 285px) {
}
`


export const ContactDetails = styled.div`
margin: 30px 0px;

p{
    margin: 10px 0px;
    color: white;

}

@media (max-width: 653px) {
  margin: 20px 0px; 

  p{
    margin: 5px 0px;
    
  }
}



@media (max-width: 375px) {
  margin: 10px 0px; 

  p{
    margin: 5px 0px;
    font-size : 12px;
  }
}

`



//Right Section

export const GeneralFormWrapper = styled.div`

width : 50%;
@media (max-width: 843px) {
  width : 90%;
  margin : auto;
}


@media (max-width: 653px) {
 margin : 0px auto;
 display : none;
}
`


export const FormWrapper = styled.form`
width: 100%;
`

export const LabelError = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 7px 0px;

@media (max-width: 653px) {
  margin: 5px 0px;
}

`


export const Label = styled.label`
color: #386cab;
`


export const ErrorMessage = styled.p`
color:red;
font-size: 10px;
`

export const FormSuccess = styled.p`

transition: 300ms ease-in;
margin: 30px 0px;
color: green;
display : none;

@media (max-width: 843px) {
  margin: 10px 0px;
  text-align : center;
}
`


export const FormControl = styled.div`
width: 100%;
`


export const FormInput = styled.input`
width: 100%;
border-radius: 5px; 
outline: none;
border: 1px solid  #386cab;
margin-bottom: 10px;
padding: 7px;
height : 40px;

@media (max-width: 653px) {
  

}

@media (max-width: 375px) {

  &:focus ${ContactSubText} {
    display : none;
   }
}

`

export const FormTextArea = styled.textarea`
width: 100%;
border-radius: 5px; 
outline: none;
border: 1px solid  #386cab;
margin-bottom: 10px;
padding: 7px;
height : 80px;
@media (max-width: 653px) {

}
`

export const  ButtonControl  = styled.div`
display: flex;
justify-content: center;
align-item:center;
width:100%;

@media (max-width: 843px) {

}

`

export const Button = styled.button`
background-color: #386cab;
color: white;
outline:none;
border: none;
border-radius: 5px; 
cursor: pointer;
transition: 300ms ease-in;
padding: 15px 20px;
font-size : 16px; 

&:hover{
    background-color: #5390d9;
    
}

@media (max-width: 843px) {
  width: 80%;
  padding: 15px 10px;
}

@media (max-width: 653px) {

  font-size: 16px;
  width: 100%;
}
`


