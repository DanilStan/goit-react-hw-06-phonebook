import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/Filter/selector';
import Contact from '../Contact/Contact';

function ContactsList() {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
}

export default ContactsList;
