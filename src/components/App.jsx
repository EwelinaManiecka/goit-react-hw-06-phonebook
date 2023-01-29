import React from 'react';
import { useState } from 'react';

import useLocalStorage from 'hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts');
  const [filter, setFilter] = useState('');

  const addContacts = ({ id, name, number }) => {
    if (
      contacts.find(contact => {
        return contact.name === name;
      })
    ) {
      return alert(`${name} is already in contacts`);
    }
    const contact = {
      id,
      name,
      number,
    };
    setContacts(prevState => [contact, ...prevState]);
  };

  const filterContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter filter={filterChange} />
      <ContactList filter={filterContact} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
