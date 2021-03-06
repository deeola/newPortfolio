import { useEffect, useState } from "react";


const useForm = (callback, validate) => {
  //GENERAL INITIAL VALUES FOR INPUT

  const [values, setValues] = useState({
    names: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  //handle change event

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  //handle submit event

 
 
  
  const handleSubmits = (e) => {
    
  
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }

    //eslint-disable-next-line
  }, [errors]);

  return {
    handleChange,
    handleSubmits,
    values,
    errors,
   
    
  };
};

export default useForm;