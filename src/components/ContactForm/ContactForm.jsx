import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import css from './ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const formSumbit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    if (contacts.some(contact => contact.number === number)) {
      const filterNumber = contacts.filter(
        contact => contact.number === number
      )[0].name;
      alert(`${number} is already in contact with ${filterNumber}`);
      return;
    }
    console.log(newContact);
    dispatch(addContact(newContact));
    form.reset();
    // addContacts({
    //   id: shortid.generate(),
    //   name: name,
    //   number: number,
    // });
    // event.currentTarget.reset();
  };

  return (
    <div className={css.container}>
      <form onSubmit={formSumbit}>
        <p className={css.title}>Name</p>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={formNameChange}
        ></input>
        <p className={css.title}>Number</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // onChange={formNumberChange}
        ></input>
        <button className={css.btnSubmit} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
