import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EMPLOYER } from '../utils/mutations';

import Auth from '../utils/auth';
import './FormStyles.css';

const EmployerSignup = () => {
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

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form className="employer-form" onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholer="Your company name"
          name="companyName"
          type="companyName"
          id="companyName"
          value={formState.companyName}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Your email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="******"
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div>Signup failed</div>}
    </div>
  );
};

export default EmployerSignup;
