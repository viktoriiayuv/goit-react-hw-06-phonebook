import { useState } from 'react';
import PropTypes from 'prop-types';

import { ContactFormContainer } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.log('Invalid field name');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    };
    addContact(newContact, reset);
  };

  const reset = () => {
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </ContactFormContainer>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
