import { useState } from "react";
import contactsDefault from "../../../contacts.json";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(contactsDefault);
  const handleAddContact = (newContact) => {
    setContacts(...contacts, { newContact });
  };

  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={contactsDefault} />
    </div>
  );
}

export default App;
