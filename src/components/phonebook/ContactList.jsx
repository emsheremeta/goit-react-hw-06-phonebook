import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';

class ContactList extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div>
        {this.props.contacts.length !== 0 &&
          this.props.contacts
            .filter(contact =>
              contact.name
                .toLowerCase()
                .includes(this.props.filter.toLowerCase())
            )
            .map(contact => {
              return (
                <Contact
                  key={contact.id}
                  contact={contact}
                  onDelete={this.props.onDelete}
                ></Contact>
              );
            })}
      </div>
    );
  }
}

export default ContactList;
