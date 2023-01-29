import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleFilter}
      ></input>
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.func.isRequired,
};

export default Filter;
