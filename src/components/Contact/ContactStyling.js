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

export const LabelError = styled.div``


export const Label = styled.label``


export const ErrorMessage = styled.p``

export const FormSuccess = styled.p``


export const FormControl = styled.div``


export const FormInput = styled.input``

export const FormTextArea = styled.textarea``

export const Button = styled.button``


