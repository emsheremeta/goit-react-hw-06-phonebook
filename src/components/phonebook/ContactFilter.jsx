import React from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

class ContactFilter extends React.Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div>
        <label className={styles.contactLabel}>Find contacts by name:</label>
        <input
          className={styles.contactsInput}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default ContactFilter;
