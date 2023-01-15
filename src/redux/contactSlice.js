import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: ''
  },
  reducers: {
    addContact(state, action) {
        console.log('add contact' + JSON.stringify(action.payload));
        state.contacts.push(action.payload);
    },
    filterChange(state, action) {
        console.log('sf' + JSON.stringify(action.payload));
        state.filter = action.payload
    },
    deleteContact (state, action) {
        console.log(JSON.stringify (action.payload) + 'del');
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    }
  }
});

export const {addContact, filterChange, deleteContact} = contactSlice.actions;