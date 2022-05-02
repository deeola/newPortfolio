import React from "react";
import translate from "../../i18nProvider/translate";
import {
  Button,
  ButtonControl,
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
 
  const { handleChange, handleSubmits, values, errors } = useForm(
    SubmitForm,
    validate
  );
  return (
    <GeneralFormWrapper>
      <FormSuccess>
      {translate('thanks')}
      </FormSuccess>
      <FormWrapper  onSubmit={handleSubmits} noValidate>
        <FormControl>
          <LabelError>
            <Label htmlFor="names">{translate('name')}</Label>
            {errors.names && <ErrorMessage>{errors.names}</ErrorMessage>}
          </LabelError>
          <FormInput
            onChange={handleChange}
            type="text"
            name="names"
            value={values.names}
            id="names"
          />
        </FormControl>
        <FormControl>
          <LabelError>
            <Label htmlFor="email">{translate('email')}</Label>
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
            <Label htmlFor="subject">{translate('subject')}</Label>
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
            <Label htmlFor="message">{translate('message')}</Label>
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </LabelError>
          <FormTextArea
            onChange={handleChange}
            name="message"
            value={values.message}
            id="message"
          />
        </FormControl>
        <ButtonControl>
        <Button type="submit">{translate('submit')}</Button>
        </ButtonControl>
        
      </FormWrapper>
    </GeneralFormWrapper>
  );
};

export default Form;


