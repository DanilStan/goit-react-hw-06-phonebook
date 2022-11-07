import { nanoid } from "nanoid";
const { createSlice } = require("@reduxjs/toolkit");

export const contactsInitialState = {
  contacts: []
};

const contactListSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.contacts.find(contact => contact.name === action.payload)
        ? alert(`${action.payload} is already in contacts`)
        : state.contacts.push({ name: action.payload.name, number: action.payload.number, id: nanoid() })
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    }
  }
});

export const { addContact, deleteContact } = contactListSlice.actions;

export const contactListReducer = contactListSlice.reducer;
