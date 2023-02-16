import React from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import useLocalStorage from 'hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { setStatusFilter } from '../redux/filterSlice';
import { addContact } from 'redux/contactsSlice';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filters.filter);
  // const [contacts, setContacts] = useLocalStorage('contacts');
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const addContacts = ({ id, name, number }) => {
    if (
      contacts.find(contact => {
        return contact.name === name;
      })
    ) {
      return alert(`${name} is already in contacts`);
    }
    // const contact = {
    //   id,
    //   name,
    //   number,
    // };
    dispatch(addContact(contacts));
  };

  const filterChange = event => {
    dispatch(setStatusFilter(event.currentTarget.value));
  };

  const filterContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const deleteContact = contactId => {
    dispatch(contacts.filter(contact => contact.id !== contactId));
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
