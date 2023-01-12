import ContactFilter from './phonebook/ContactFilter';
import Form from './phonebook/Form';
import { nanoid } from 'nanoid';
import styles from './phonebook/Phonebook.module.css';
import ContactList from './phonebook/ContactList';
import { useEffect, useState } from 'react';

function PhoneApp() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log(`Resetting to ${JSON.stringify(contacts)}`);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    console.log('efefct');
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts);
    }
    console.log('efefct2');

    // localStorage.setItem('contacts', JSON.stringify(contacts));
  }, []);

  const onChange = event => {
    setFilter(event.currentTarget.value);
  };
  const onSubmit = data => {
    console.log(data);
    const { name, number } = data;

    if (
      contacts.filter(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      ).length === 0
    ) {
      const id = nanoid();
      const contact = {
        id: id,
        name: name,
        number: number,
      };
      setContacts([...contacts, contact]);
      localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
    } else {
      alert('This contact already exist');
    }
  };

  const onDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1 className={styles.text}>Phonebook</h1>

      <Form onSubmit={onSubmit}></Form>

      <h2 className={styles.contactText}>Contacts</h2>

      <ContactFilter filter={filter} onChange={onChange}></ContactFilter>
      <ContactList
        contacts={getFilteredContacts()}
        filter={filter}
        onDelete={onDelete}
      ></ContactList>
    </div>
  );
}
export default PhoneApp;

// class PhoneApp extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     console.log('did mount');

//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts) {
//       this.setState({ contacts: contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('did update');
//     if (this.state.contacts !== prevState.contacts) {
//       console.log('upd');

//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   onChange = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };
//   onSubmit = data => {
//     console.log(data);
//     const { name, number } = data;

//     if (
//       this.state.contacts.filter(
//         contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
//       ).length === 0
//     ) {
//       const id = nanoid();
//       const contact = {
//         id: id,
//         name: name,
//         number: number,
//       };
//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, contact],
//       }));
//     } else {
//       alert('This contact already exist');
//     }
//   };

//   onDelete = event => {
//     const id = event.target.parentElement.id;
//     this.setState({
//       contacts: this.state.contacts.filter(contact => contact.id !== id),
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1 className="Phonebook__text">Phonebook</h1>

//         <Form onSubmit={this.onSubmit}></Form>

//         <h2 className="Phonebook__text__contacts">Contacts</h2>

//         <ContactFilter
//           filter={this.state.filter}
//           onChange={this.onChange}
//         ></ContactFilter>
//         <ContactList
//           contacts={this.state.contacts}
//           filter={this.state.filter}
//           onDelete={this.onDelete}
//         ></ContactList>
//       </div>
//     );
//   }
// }
// export default PhoneApp;
