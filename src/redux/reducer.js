import { createReducer } from '@reduxjs/toolkit';
import {addContact, deleteContact, filterChange} from './actions';

const contactInitialState =   [];
const filterInitialState = '';

export const contactReducer = createReducer (contactInitialState, {
    [addContact] : (state, action) => {
        console.log('add ' + JSON.stringify(action.payload));
        state.push(action.payload);
    },
    [deleteContact] : (state, action) => {
        console.log('delete ' + JSON.stringify(action.payload));
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
        // state = state.filter(contact => contact.id !== action.payload);
    
    }
});
export const filterReducer = createReducer(filterInitialState, {
    [filterChange] : (state, action ) => {
        console.log('filter ' + JSON.stringify(action.payload));
        return action.payload;
    }
 });

//  OLD VERSION WITH SWITCH& WITHOUT REDUX TOOLKIT HOOK

// export  const ContactReducer = (state = initialState, action) => {
//  switch (action.type) {
//     case addContact.type :
//         return  state.contacts.push(action.payload);

//     case deleteContact.type:
//          return state.contacts.filter(contact => contact.id !== action.payload);

    
//     case filterChange.type:
//         return state.filter = action.payload;
//         default:
//             return state;
//         }
//  }