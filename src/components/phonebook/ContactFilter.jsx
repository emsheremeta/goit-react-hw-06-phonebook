import React from 'react';
import styles from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/contactSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = event => {
    const filter = event.currentTarget.value;
    dispatch(filterChange(filter));
  };
  return (
    <div>
      <label className={styles.contactLabel}>Find contacts by name:</label>
      <input
        className={styles.contactsInput}
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
      />
    </div>
  );
}

export default ContactFilter;
