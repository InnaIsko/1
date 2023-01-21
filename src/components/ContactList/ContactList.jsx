import { ContactListItem } from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <ul>
        {filter.map(contact => (
          <ContactListItem onContactInfo={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
}
