import { useState, useEffect } from "react";
import contactsDefault from "../../../contacts.json";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = window.localStorage.getItem("save-contacts");
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    } else {
      return contactsDefault;
    }
  });

  const [inputValue, setInputValue] = useState("");

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("save-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox inputValue={inputValue} handleChange={setInputValue} />
      <ContactList
        contacts={visibleContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
