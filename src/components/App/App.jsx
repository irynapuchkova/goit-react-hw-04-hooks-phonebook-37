import { useState, useEffect } from 'react';
import shortid from 'shortid';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Title, FormSet } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? '';
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandle = ({ name, number }) => {
    const contactsNames = contacts.map(contact => contact.name);

    if (contactsNames.includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prevState => [newContact, ...prevState]);
  };

  const handleFilter = e => {
    const filterValue = e.currentTarget.value;
    setFilter(filterValue);
  };

  const filterContacts = data => {
    const filteredContactsList = data.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
    return filteredContactsList;
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContactsList = filterContacts(contacts);

  return (
    <FormSet>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={contact => formSubmitHandle(contact)} />

      <Title>Contacts</Title>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={filteredContactsList} onClick={deleteContact} />
    </FormSet>
  );
}
