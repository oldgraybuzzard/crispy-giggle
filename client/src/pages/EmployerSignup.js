import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EMPLOYER } from '../utils/mutations';

import Auth from '../utils/auth';
import './FormStyles.css';

const EmployerSignup = props => {
  const [formState, setFormState] = useState({
    companyName: '',
    email: '',
    password: '',
  });

  const [addEmployer, { error }] = useMutation(ADD_EMPLOYER);

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
      const { data } = await addEmployer({
        variables: { ...formState },
      });
      Auth.login(data.addEmployer.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form className="employer-form" onSubmit={handleFormSubmit}>
        <h3 className="form-title-signup">Company Name:</h3>
        <input
          className="form-input-signup"
          placeholer="Your company name"
          name="companyName"
          type="companyName"
          id="companyName"
          value={formState.companyName}
          onChange={handleChange}
        />
        <h3 className="form-title-signup">Email:</h3>
        <input
          className="form-input-signup"
          placeholder="Your email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
        <h3 className="form-title-signup">Password:</h3>
        <input
          className="form-input-signup"
          placeholder="******"
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button className="form-button-signup" type="submit">
          Submit
        </button>
      </form>
      {error && <div>Signup failed</div>}
    </div>
  );
};

export default EmployerSignup;
