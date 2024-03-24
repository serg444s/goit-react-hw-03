import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={css.item}>
              <Contact
                obj={contact}
                handleDeleteContact={handleDeleteContact}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
