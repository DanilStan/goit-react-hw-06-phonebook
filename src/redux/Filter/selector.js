export const getFilteredContacts = (state) => {
  return state.contacts.contacts.filter(contact=> contact.name.toLowerCase().includes(state.filter.filter))
}