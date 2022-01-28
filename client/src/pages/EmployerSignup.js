import React from 'react';

import Input from '../components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../utils/formValidators';
import './FormStyles.css';

const EmployerSignup = () => {
  return (
    <form className="employer-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
      />
    </form>
  );
};

export default EmployerSignup;
