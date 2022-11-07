import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactList/slice.contactList';
import { Button, ContactsList } from './Contacts.styled';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsList>
      <span>{name}: </span>
      <span>{number}</span>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ContactsList>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
