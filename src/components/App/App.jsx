import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm, ContactList, React, Filter } from 'components/App/index';

import { Container, Title, SubTitle } from 'components/App/App.styled';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
};

export default App;
