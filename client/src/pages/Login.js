import React from 'react';
import { useMutation } from '@apollo/client';
import { EMPLOYER_LOGIN } from '../utils/mutations';
import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../utils/formValidators';
import { useForm } from '../hooks/form-hook';
import './FormStyles.css';
import Auth from '../utils/auth';

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

  const [employerLogin, { error }] = useMutation(EMPLOYER_LOGIN);

  const loginSubmitHandler = async event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!

    try {
      const { data } = await loginSubmitHandler({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    // clear form values
    inputHandler(
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
  };

  return (
    <div>
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
      {error && <div>Login failed</div>}
    </div>
  );
};

export default Login;
