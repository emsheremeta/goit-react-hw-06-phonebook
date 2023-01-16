import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
    console.log(id);
  };
  const getFilteredContacts = () => {
    console.log(contacts, typeof contacts);
    return contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(contacts.filter.toLowerCase())
    );
  };
  return (
    <div>
      <h2 className={styles.contactText}>Contacts</h2>
      {contacts.contacts.length !== 0 &&
        getFilteredContacts().map(contact => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
            ></Contact>
          );
        })}
    </div>
  );
}

export default ContactList;
