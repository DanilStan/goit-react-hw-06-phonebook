import { useState } from 'react';
import { FormSlyled, Label, Button } from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/ContactList/slice.contactList';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const dispatch = useDispatch();

  const { contacts } = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // const checkUniqContactName = name => {
  //   const isIncludes = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   return isIncludes;
  // };

  const checkUniqName = name => {
    const isIncludes = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    return isIncludes;
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (checkUniqName(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormSlyled onSubmit={handleSubmit}>
      <Label>
        {' '}
        Name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeInput}
        />
      </Label>

      <Label>
        {' '}
        Number
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeInput}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </FormSlyled>
  );
}

export default Form;
