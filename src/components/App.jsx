import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import notifyOptions from '../NotifyOptions/NotifyOptions';
import dafaultContacts from '../data/contacts.json';
import useLocalStorage from 'hooks/UseLocalStorage';

import MainContainer from './MainContainer/MainContainer';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Header from './Header/Header';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import './App.module.css';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', dafaultContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const includesContact = contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length;

    if (includesContact) {
      return toast.error(
        `${newContact.name}: is already in contacts`,
        notifyOptions
      );
    } else {
      setContacts(contacts => [newContact, ...contacts]);
      // setContacts(prevState => [newContact, ...prevState]);
    }
    toast.success(
      `${newContact.name} was successfully added to your contacts`,
      notifyOptions
    );
  };

  const searchFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    // setContacts(prevState => prevState.filter(contact => contact.id !== id));

    const deletedContact = contacts.find(contact => contact.id === id);
    if (deletedContact) {
      toast.warn(
        `${deletedContact.name} was successfully deleted from your contacts`,
        notifyOptions
      );
    }
  };

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <MainContainer>
      <Section title="Phonebook">
        <ContactForm onAddContact={addContact} />
        <Header title="Contacts" />
        <Filter value={filter} onChange={searchFilter} />
        <ContactList contacts={filteredContact} onDelete={deleteContact} />
      </Section>
      <ToastContainer />
    </MainContainer>
  );
}
