import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { EMPLOYEE_LOGIN } from '../utils/mutations';
import './FormStyles.css';
import Auth from '../utils/auth';

const EmployeeLogin = props => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [employeeLogin, { error }] = useMutation(EMPLOYEE_LOGIN);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await employeeLogin({
        variables: { ...formState },
      });

      Auth.employeeLogin(data.employeeLogin.token);
    } catch (e) {
      console.log(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h3 className="form-title">Email:</h3>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Your email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
        <h3 className="form-title">Password:</h3>
        <input
          className="form-input"
          placeholder="******"
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
      {error && <div>Login failed</div>}
    </div>
  );
};

export default EmployeeLogin;
