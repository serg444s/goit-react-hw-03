import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact name={contact.name} number={contact.number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
