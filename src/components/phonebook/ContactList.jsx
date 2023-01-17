import React from 'react';
import Contact from './Contact';
import styles from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  console.log('filter', typeof filter);

  const onDelete = id => {
    dispatch(deleteContact(id));
    console.log(id);
  };
  const getFilteredContacts = () => {
    return contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div className={styles.contactWrapper}>
      <h2 className={styles.contactText}>Contacts</h2>
      {contacts.length !== 0 &&
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
