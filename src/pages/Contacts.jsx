// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/Form';

export function Contacts() {
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  //   useEffect(() => {
  //     dispatch(fetchTasks());
  //   }, [dispatch]);

  return (
    <>
      <ContactForm />
      <title>Your contacts</title>
      <ContactList />
      <Filter />
    </>
  );
}
