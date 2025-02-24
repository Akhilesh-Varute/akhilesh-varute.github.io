v// components/Contact/validation.js
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validateForm = (values) => {
    const errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    } else if (values.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
  
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(values.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!values.message.trim()) {
      errors.message = 'Message is required';
    } else if (values.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
  
    return errors;
  };
  
  // Add custom hooks for form handling
  // components/Contact/hooks.js
  import { useState, useEffect } from 'react';
  
  export const useFormValidation = (initialState, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    useEffect(() => {
      if (isSubmitting) {
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
          setIsSubmitting(false);
        } else {
          setIsSubmitting(false);
        }
      }
    }, [errors, isSubmitting]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value
      });
    };
  
    const handleBlur = () => {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setIsSubmitting(true);
  
      if (Object.keys(validationErrors).length === 0) {
        try {
          // Here you would typically make an API call
          await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
          setValues(initialState);
          return true;
        } catch (error) {
          setErrors({ submit: 'Failed to send message. Please try again.' });
          return false;
        }
      }
      return false;
    };
  
    return {
      values,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    };
  };
  