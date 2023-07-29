import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components';
import { ContactList } from '../components';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import { Loader } from '../components';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        {' '}
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && <Loader />}</div> <ContactList />
    </>
  );
};

export default Contacts;
