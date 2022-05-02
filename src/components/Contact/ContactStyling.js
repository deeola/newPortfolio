import styled from 'styled-components';




export const ContactContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
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


export const SimpleContact = styled.div`
width: 85%;
  margin: 0px auto;
  padding: 40px 0px;

  @media (max-width: 653px) {

    padding: 20px 0px;
  }

  @media (max-width: 375px) {
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

}

@media (max-width: 653px) {



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


@media (max-width: 375px) {
  margin: 10px 0px; 

  p{
    margin: 5px 0px;
    font-size : 12px;
  }
}

`



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

export const GeneralFormWrapper = styled.div`
@media (max-width: 843px) {
  width : 90%;
  margin : auto;
}


@media (max-width: 653px) {
 margin : 0px auto;


}
`


export const FormWrapper = styled.form`

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
height: 40px;
border-radius: 5px; 
outline: none;
border: 1px solid  #386cab;
margin-bottom: 10px;
padding: 7px;

@media (max-width: 653px) {
  height: 40px;
}

@media (max-width: 375px) {
  height: 30px;
}

`

export const FormTextArea = styled.textarea`
width: 100%;
height: 70px;
border-radius: 5px; 
outline: none;
border: 1px solid  #386cab;
margin-bottom: 10px;
padding: 7px;
@media (max-width: 653px) {
  height: 50px;
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
padding: 15px 40px;
background-color: #386cab;
color: white;
outline:none;
border: none;
border-radius: 5px; 
font-size: 20px;
cursor: pointer;
transition: 300ms ease-in;

&:hover{
    background-color: #5390d9;
    
}

@media (max-width: 843px) {
  width: 80%;
  padding: 15px 10px;
}

@media (max-width: 653px) {
  padding: 15px 40px;
  font-size: 16px;
  width: 100%;
}
`


