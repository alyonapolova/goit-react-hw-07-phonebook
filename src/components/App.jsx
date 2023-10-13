import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContactList from './ContactList/ContactList';
import { ContactsDiv } from './ContactList/ContactList.styled';
import Form from './Form/Form';
import { FormDiv } from './Form/Form.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <FormDiv>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactsDiv>
        <ContactList />
      </ContactsDiv>
    </FormDiv>
  );
};
