import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact" , contact => {
    return {
        payload: {
            name: contact.name,
            number: contact.number,
            id: nanoid()
        }
    }
});

export const deleteContact = createAction("contacts/deleteContact");

export const filterChange = createAction("filter/filterChange");

