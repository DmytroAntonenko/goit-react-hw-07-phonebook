import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactForm from "./ContactForm";
import Filter from './Filter';
import ContactList from './ContactList';

import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
     
  return (
    <div
      style={{
      border: '1px solid black',
      borderRadius: '4px',
      maxWidth: '320px',
      marginTop: '44px',
      margin: 'auto',
      padding: '12px'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  )}

export default App;