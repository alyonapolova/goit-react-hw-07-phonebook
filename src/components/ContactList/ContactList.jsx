import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);
  //const isLoading = useSelector(getIsLoading);
  console.log(contactList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <Filter />
      <h1>Contact List</h1>
      <ul>
        {contactList.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.phone}
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
