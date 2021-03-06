function ValidateSign(values) {
    //FORM VALIDATIONS
  
    let errors = {};  
    if (!values.names) {
      errors.names = "Name Required";
    }
  
    if (!values.message) {
      errors.message = "Please enter a message";
    }
  
    if (!values.subject) {
      errors.subject = "Subject cannot be empty";
    }
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    return errors;
  }
  
  export default ValidateSign;