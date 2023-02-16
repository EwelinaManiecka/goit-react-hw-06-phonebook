import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import css from './ContactList.module.css';
import { filtersReducer } from 'redux/filterSlice';
import { getContacts, getStatusFilter } from 'redux/selectors';

const ContactList = ({ filter, onDeleteContact }) => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(statusFilter.toLowerCase());
  });

  const deleteItemContact = id => {
    return dispatch(deleteContact(id));
  };

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filter.map(contact => {
            return (
              <li className={css.item} key={contact.id}>
                <p className={css.text}>
                  {contact.name}: {contact.number}
                </p>
                <button
                  className={css.btnDelete}
                  type="button"
                  onClick={() => onDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification message="You don't have this contact." />
      )}
    </>
  );
};

ContactList.prototype = {
  statusFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
