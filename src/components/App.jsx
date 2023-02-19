import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { setStatusFilter } from '../redux/filterSlice';
import { addContact } from 'redux/contactsSlice';
import { getContacts, getStatusFilter } from 'redux/selectors';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

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
    dispatch(addContact(contact));
  };

  const filterChange = event => {
    dispatch(setStatusFilter(event.currentTarget.value));
  };

  const filterContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter filter={filterChange} />
      <ContactList filter={filterContact} />
    </div>
  );
}
