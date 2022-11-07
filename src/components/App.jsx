import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
