import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { Container, Content, AppTitle, ListTitle } from './App.styled';
import {
  ContactForm,
  ContactList,
  Filter,
  Loader,
  NavBar,
} from '../../components';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <NavBar />
        <Content>
          <AppTitle>Phonebook</AppTitle>
          <ContactForm />
          <ListTitle>Contacts</ListTitle>
          <Filter />
          {isLoading && <Loader />}
          {error && <p>{error}</p>}
          {contacts.length > 0 && <ContactList />}
        </Content>
      </Container>
    </>
  );
};
