import { createSlice, nanoid } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contactsInitialState = [
  { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
  { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
  { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
