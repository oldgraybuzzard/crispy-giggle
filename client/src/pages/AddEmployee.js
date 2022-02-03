import React, { useState } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { ADD_EMPLOYEE } from '../utils/mutations';
import './FormStyles.css';

const AddEmployee = props => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    role: '',
    password: '',
  });

  const [addEmployee, { error }] = useMutation(ADD_EMPLOYEE);

  // capture data from the input elements.
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // handleFormSubmit to use captured data in formState to create an employee
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addEmployee({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }

    // clear the form values
    setFormState({
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      role: '',
      password: '',
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="add-employee-form">
        <h2 className="form-title-add-employee">Add Employee</h2>
        <div>
          <span className="span-text">Enter employee's first name:</span>
          <input
            className="form-input-add-employee"
            placeholder="Employee's first name"
            name="firstName"
            type="firstName"
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <span className="span-text">Enter employee's last name:</span>
          <input
            className="form-input-add-employee"
            placeholder="Employee's last name"
            name="lastName"
            type="lastName"
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <span className="span-text">Enter employee's email:</span>
          <input
            className="form-input-add-employee"
            placeholder="Employee's email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <span className="span-text">Enter employee's department:</span>
          <input
            className="form-input-add-employee"
            placeholder="Employee's department"
            name="department"
            type="department"
            id="department"
            value={formState.department}
            onChange={handleChange}
          />
        </div>
        <div>
          <span className="span-text">Enter employee's role:</span>
          <input
            className="form-input-add-employee"
            placeholder="Employee's role"
            name="role"
            type="role"
            id="role"
            value={formState.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <span className="span-text">Enter employee's password:</span>
          <input
            className="form-input-add-employee"
            placeholder="Employee's password"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="form-button-add-employee">
          Add Employee
        </Button>
      </form>
    </>
  );
};

export default AddEmployee;
