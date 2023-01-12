import React from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

class Contact extends React.Component {
  static propTypes = {
    contacts: PropTypes.objectOf(PropTypes.string.isRequired),
    onDelete: PropTypes.func.isRequired,
  };
  render() {
    const { id, name, number } = this.props.contact;

    return (
      <li className={styles.contactList} id={id}>
        {name}: {number}
        <button
          className={styles.buttonContact}
          onClick={() => this.props.onDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default Contact;
