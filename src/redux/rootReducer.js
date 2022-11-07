import { combineReducers } from 'redux';
import { contactListReducer } from "./ContactList/slice.contactList";
import { filterReducer } from "./Filter/slice.filter";

export const rootReducer = combineReducers({
    contacts: contactListReducer,
    filter: filterReducer,
});