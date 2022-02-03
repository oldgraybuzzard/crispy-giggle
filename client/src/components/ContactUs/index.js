import React, { useEffect, useState } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import { send } from 'emailjs-com';
import { validateEmail } from '../../utils/emailValidator';
import env from 'react-dotenv';
import './contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    meddage: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  const [open, setOpen] = React.useState(false);

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    send(env.serviceId, env.templateId, toSend, 'user_wpiXZHfDebJAVoo86p01m')
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
    <Modal
      className=""
      centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Contact Us</Button>}
    >
      <Modal.Content>
        <Modal.Description>
          <Header>Contact Us</Header>
          <p>We would like to hear from you!</p>
          <form id="contact-form" onSubmit={handleSubmit} className="mb-5">
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
              <label htmlFor="message">Message:</label>
            </div>
            <div>
              <textarea
                className="form-control"
                placeholder="Message"
                name="message"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
                required
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <div>
              <button type="submit" className="ui primary button">
                Send
              </button>

              <Button
                content="Close"
                labelPosition="center"
                icon="close"
                onClick={() => setOpen(false)}
                positive
              />
            </div>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default Contact;
