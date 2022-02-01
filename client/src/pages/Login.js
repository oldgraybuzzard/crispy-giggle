import React, { useCallback, useReducer } from 'react';

import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../utils/formValidators';
import { useForm } from '../hooks/form-hook';
import './FormStyles.css';

const Login = () => {
  const [formState, inputHandler] = useForm(
    {
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

  const loginSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="login-form" onSubmit={loginSubmitHandler}>
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

export default Login;
