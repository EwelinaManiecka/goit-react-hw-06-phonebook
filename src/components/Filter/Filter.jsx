import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilter = filter => dispatch(setStatusFilter(filter));

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
