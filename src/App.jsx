import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import contactsData from "./contactsData.json";
import { useEffect, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringifyContacts = localStorage.getItem("myContacts");
    const parsContacts = JSON.parse(stringifyContacts) ?? contactsData;
    return parsContacts;
  });
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const onAddContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, finalContact]);
  };

  const onDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      contact.number.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("myContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={onAddContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
};

export default App;
