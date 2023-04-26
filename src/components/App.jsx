import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact, reset) => {
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
      reset();
    }
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterChange = filterText => {
    setFilter(filterText);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filterChange={filterChange} />
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
