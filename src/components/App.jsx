import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import {
  Section,
  SectionTitlePrimary,
  SectionTitleSecondary,
} from './App.styled';

export function App() {
  return (
    <Section>
      <SectionTitlePrimary>Phonebook</SectionTitlePrimary>
      <Form />

      <SectionTitleSecondary>Contacts</SectionTitleSecondary>
      <Filter />
      <ContactsList />
    </Section>
  );
}
