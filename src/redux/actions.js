import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('add_contact');
export const deleteContact = createAction('delete_contack');
export const setFilter = createAction('set_filter');
