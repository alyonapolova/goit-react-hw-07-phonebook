import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  getContacts,
  getError,
  getIsLoading,
  selectorFilteredContacts,
} from 'redux/selectors';
import { ListUl, ListLi, ButtonLi } from './ContactList.styled';

const ContactList = ({ item }) => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filteredContacts = useSelector(selectorFilteredContacts);

  useEffect(() => {
    contactList === 0 && dispatch(fetchContacts());
  }, [dispatch, contactList]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Filter />
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <ListUl>
        {filteredContacts.map(contact => (
          <ListLi key={contact.id}>
            {contact.name}:{contact.phone}
            <ButtonLi onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </ButtonLi>
          </ListLi>
        ))}
      </ListUl>
    </>
  );
};
export default ContactList;
