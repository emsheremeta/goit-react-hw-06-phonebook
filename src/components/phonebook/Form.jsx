import styles from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';

function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    console.log(form.name.value);

    if (name.trim() === '') {
      alert('Please, add the name! ');
      return;
    }
    if (
      contacts.contacts.filter(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      ).length === 0
    ) {
      dispatch(
        addContact({
          name: name,
          number: number,
        })
      );
    } else {
      alert('This contact already exist');
    }
    form.reset();
  };

  return (
    <div>
      <h1 className={styles.text}>Phonebook</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          size={35}
          placeholder="Put your name here"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={styles.label}>Number</label>
        <input
          className={styles.input}
          size={35}
          placeholder="Put your number here"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={styles.button}>Add Contact</button>
      </form>
    </div>
  );
}

export default Form;

// OLD VERSION

// class Form extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   onSubmit = event => {
//     event.preventDefault();
//     if (this.state.name.trim() === '') {
//       alert('Please, add the name! ');
//       return;
//     }
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   onChange = event => {
//     console.log(event);
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     return (
//       <div>
//         <form className="Phonebook__form" onSubmit={this.onSubmit}>
//           <label className="Phonebook__label">Name</label>
//           <input
//             className="Phonebook__input"
//             size={35}
//             placeholder="Put your name here"
//             onChange={this.onChange}
//             type="text"
//             name="name"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />

//           <label className="Phonebook__label">Number</label>
//           <input
//             className="Phonebook__input"
//             size={35}
//             placeholder="Put your number here"
//             onChange={this.onChange}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />

//           <button className="Phonebook__button" onClick={this.onSubmit}>
//             Add Contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
