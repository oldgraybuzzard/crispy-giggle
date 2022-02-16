import React, { useState } from 'react';
import { Button, Header, Modal, Form, TextArea } from 'semantic-ui-react';
import { send } from 'emailjs-com';
import { validateEmail } from '../../utils/emailValidator';
import './contact.css';

function dimmerReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
      default:
        throw new Error()
  }
}

function Contact() {
  const [state, dispatch] = React.useReducer(dimmerReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, toSend, 'user_wpiXZHfDebJAVoo86p01m')
      .then(response => {
        console.log(
          'Success, mail had been sent!',
          response.status,
          response.text
        );
        alert('Thank You for contacting us');
      })
      .catch(err => {
        console.log('FAILED to deliver message', err);
      });
  };

  const handleChange = e => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email address is not valid');
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
      setToSend({ ...toSend, [e.target.name]: e.target.value });

      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <Button onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}>Contact Us</Button>
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        >
          <Modal.Content>
            <Modal.Description>
              <Header>Contact Us</Header>
              <p>We would like to hear from you!</p>
              <Form id="contact-form" onSubmit={handleSubmit} className="mb-5">
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    className="form-control"
                    placeholder="Name"
                    type="text"
                    name="name"
                    defaultValue={name}
                    onBlur={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email address:</label>
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    name="email"
                    defaultValue={email}
                    onBlur={handleChange}
                    required
                  />
                </div>
                <div>
                  <div >
                    <label htmlFor="message">Message:</label>
                  </div>
                  <div>
                    <TextArea
                      className="form-control"
                      placeholder="Message"
                      rows="5"
                      cols="75"
                      // onBlur={handleChange}
                      required
                      style={{ minHeight: 100, minWidth: 100 }}
                    />
                  </div>
                  {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}
                  <div>
                </div>
                  <button type="submit" className="ui primary button">
                    Send
                  </button>

                  <Button
                    content="Close"
                    labelPosition="right"
                    icon="close"
                    negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
                    positive
                  />
                </div>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
    </div>
  );
}

export default Contact;
