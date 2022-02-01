import React from 'react';

import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../utils/formValidators';
import { useForm } from '../hooks/form-hook';
import './FormStyles.css';

const EmployerSignup = () => {
  const [formState, inputHandler] = useForm(
    {
      companyName: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const employerSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="employer-form" onSubmit={employerSubmitHandler}>
      <Input
        id="companyName"
        element="input"
        type="text"
        label="Company Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Company Name."
        onInput={inputHandler}
      />
      <Input
        id="email"
        element="input"
        label="Email"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email."
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        label="Password"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid password."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Submit
      </Button>
    </form>
  );
};

export default EmployerSignup;
