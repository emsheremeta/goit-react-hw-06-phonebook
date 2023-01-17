import { createSlice, nanoid } from "@reduxjs/toolkit";
 
const contactInitialSlice ={
    contacts: []
}
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialSlice,
  reducers: {
    addContact(state, action) {
        action.payload.id=nanoid();
        console.log('add contact' + JSON.stringify(action.payload));
        state.contacts.push(action.payload);
    },
    deleteContact (state, action) {
        console.log(JSON.stringify (action.payload) + 'del');
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    }
  }
});

export const {addContact, deleteContact} = contactSlice.actions;

