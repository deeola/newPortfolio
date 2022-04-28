import styled from 'styled-components';




export const ContactContainer = styled.div`
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


export const SimpleContact = styled.div`
width: 85%;
  margin: 0px auto;
  padding: 40px 0px;
`

export const ContactTitle = styled.h1`
color: white;
font-size: 40px;
`


export const ContactSubText = styled.p`
margin: 30px 0px; 
color: white;
`


export const ContactDetails = styled.div`
margin: 30px 0px;

p{
    margin: 10px 0px;
    color: white;

}
`



//Right Section

export const RightContainer = styled.div`
  width: 66.6666666666%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GeneralFormWrapper = styled.div``


export const FormWrapper = styled.form`

`

export const LabelError = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 7px 0px;

`


export const Label = styled.label`
color: #386cab;
`


export const ErrorMessage = styled.p`
color:red;
font-size: 10px;
`

export const FormSuccess = styled.p`

color: green;
transition: 300ms ease-in;
margin: 30px 0px;

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
`

export const FormTextArea = styled.textarea`
width: 100%;
height: 70px;
border-radius: 5px; 
outline: none;
border: 1px solid  #386cab;
margin-bottom: 10px;
`

export const  ButtonControl  = styled.div`
display: flex;
justify-content: center;
align-item:center;
width:100%;

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

`


