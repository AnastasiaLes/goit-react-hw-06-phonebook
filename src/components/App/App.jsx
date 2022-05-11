import {useState, useEffect } from 'react';
import { NameField } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { FilterField } from '../Filter/filter';

const LS_KEY = 'added_contacts';
const contactList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

export function PhoneBook() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(LS_KEY))
      ?? contactList;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
     const contactsObj = JSON.parse(localStorage.getItem(LS_KEY));
      if (contactsObj !== null) {
      setContacts(contactsObj);
    } 
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  const formSubmitHandler = data => {
    contacts.find(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => [...prevState, data]);
  };

   const deleteContact = contactId => {
     setContacts(prevState => prevState.filter(contact => contact.id !== contactId) );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

   return (
      <div>
        <h1>Phonebook</h1>
        <NameField onSubmit={formSubmitHandler} />
        <FilterField onChange={event => setFilter(event.currentTarget.value)} />
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </div>
    );
}
