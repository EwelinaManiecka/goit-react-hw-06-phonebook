import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import css from './ContactList.module.css';
import { getContacts, getStatusFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter)
  // );

  const dispatch = useDispatch();

  const deleteItemContact = id => {
    return dispatch(deleteContact(id));
  };

  return (
    <>
      {filter.length > 0 ? (
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
                  onClick={() => deleteItemContact(contact.id)}
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
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
