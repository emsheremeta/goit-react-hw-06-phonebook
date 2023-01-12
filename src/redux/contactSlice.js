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
    }
  }
});

export const {addContact, filterChange} = contactSlice.actions;