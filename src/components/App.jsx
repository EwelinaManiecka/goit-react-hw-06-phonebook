import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';

import useLocalStorage from 'hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const defaultItem = [
  { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
  { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
  { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultItem);
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
