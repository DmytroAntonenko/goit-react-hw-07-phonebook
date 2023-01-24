import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
  <ul className={css.contact__list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contact__item}>
        <ContactItem name={name} number={number} id={id} />
      </li>
    ))}
  </ul>
  )
};

export default ContactList;