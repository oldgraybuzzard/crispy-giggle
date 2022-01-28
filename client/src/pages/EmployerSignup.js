import React from 'react';

import Input from '../components/FormElements/Input';
import './FormStyles.css';

const EmployerSignup = () => {
  return (
    <form className="employer-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title."
      />
    </form>
  );
};

export default EmployerSignup;
