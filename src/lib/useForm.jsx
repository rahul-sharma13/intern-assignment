import React, { useEffect, useState } from 'react'

const useForm = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    guestName: ''
  });
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    if (e.target.type === 'text' || e.target.type === 'number' || e.target.type === 'email') {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setError(validateInput(formData));
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && submit) {
      console.log(formData);
    }
  }, [error]);

  const validateInput = (data) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // for email validation

    if (!data.name) {
      errors.name = "name is required.";
    }

    if (!data.age) {
      errors.age = "age is required.";
    } else if (data.age < 1) {
      errors.age = "enter a valid age.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!regex.test(data.email)) {
      errors.email = "enter a valid email address.";
    }

    if (checkbox && !data.guestName) {
      errors.guestName = "Guest name is required.";
    }

    return errors;
  };

  return {
    checkbox,
    setCheckbox,
    formData,
    handleChange,
    handleSubmit,
    error,
    submit,
  };
};

export default useForm;