import React from "react";
import {
  Button,
  ErrorMessage,
  FormControl,
  FormInput,
  FormSuccess,
  FormTextArea,
  FormWrapper,
  GeneralFormWrapper,
  Label,
  LabelError,
} from "./ContactStyling";
import useForm from "./useForm";
import validate from "./ValidateSign";

const Form = () => {
  const SubmitForm = () => {};
  const { handleChange, handleSubmit, values, errors } = useForm(
    SubmitForm,
    validate
  );
  return (
    <GeneralFormWrapper>
      <FormSuccess>
        Thanks for messaging. I'll get back to you as soon as possible.
      </FormSuccess>
      <FormWrapper onSubmit={handleSubmit} noValidate>
        <FormControl>
          <LabelError>
            <Label htmlFor="namr">Name</Label>
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </LabelError>
          <FormInput
            onChange={handleChange}
            type="text"
            name=" name"
            value={values.name}
            id="name"
          />
        </FormControl>
        <FormControl>
          <LabelError>
            <Label htmlFor="email">Email</Label>
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </LabelError>
          <FormInput
            onChange={handleChange}
            type="email"
            name="email"
            value={values.email}
            id="email"
          />
        </FormControl>
        <FormControl>
          <LabelError>
            <Label htmlFor="subject">Subject</Label>
            {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
          </LabelError>
          <FormInput
            onChange={handleChange}
            type="text"
            name="subject"
            value={values.subject}
            id="subject"
          />
        </FormControl>
        <FormControl>
          <LabelError>
            <Label htmlFor="message">Message</Label>
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </LabelError>
          <FormTextArea
            onChange={handleChange}
            name="message"
            value={values.message}
            id="message"
          />
        </FormControl>
        <Button type="submit">SUBMIT</Button>
      </FormWrapper>
    </GeneralFormWrapper>
  );
};

export default Form;
