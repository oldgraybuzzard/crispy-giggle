import React, { useState } from 'react';

// import { Link } from 'react-router-dom';

// // import for using mutation once apollo is setup
// import { useMutation } from '@apollo/client';

// // imports for Auth and Destructured ADD_EMPLOYER mutation once graphQl backend is setup
// import Auth from '../utils/auth';
// import { ADD_EMPLOYER } from '../utils/mutations';

function EmployerSignup() {
  const [formState, setFormState] = useState({
    company: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { company, email, message } = formState;

  // temporary front end submit
  const handleSubmit = e => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = e => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  // // variable for when GraphQl mutations is setup
  // const [addEmployer] = useMutation(ADD_EMPLOYER);

  // Logic for mutations once backend GraphQl apollo server is setup
  // const handleFormSubmit = async event => {
  //   event.preventDefault();
  //   const mutationResponse = await addEmployer({
  //     variables: {
  //       email: formState.email,
  //       password: formState.password,
  //       companyName: formState.companyName,
  //     },
  //   });

  //   // passing token through the mutation once token and Auth is setup
  //   const token = mutationResponse.data.addEmployer.token;
  //   Auth.login(token);
  // };

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  return (
    <div>
      <Link to="/login"> Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            placeholder="Company"
            name="companyName"
            type="companyName"
            id="companyName"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EmployerSignup;
