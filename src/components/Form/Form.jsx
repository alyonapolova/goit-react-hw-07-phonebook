import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Button, FormDiv, FormStyle } from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, phone, id: nanoid() };
    if (findDuplicate) {
      alert(`${name} is already in contacts!`);
    } else {
      dispatch(addContact(newContact));
      setName('');
      setPhone('');
    }
  };

  const findDuplicate = contacts.some(contact => contact.name === name);

  return (
    <FormDiv>
      <FormStyle onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={name}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={phone}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setPhone(e.target.value)}
        />
        <Button type="submit">Add contact</Button>
      </FormStyle>
    </FormDiv>
  );
};
export default Form;
