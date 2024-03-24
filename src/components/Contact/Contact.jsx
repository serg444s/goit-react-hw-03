import css from "./Contact.module.css";
const Contact = ({ obj, handleDeleteContact }) => {
  return (
    <div>
      <p>{obj.name}</p>
      <p>{obj.number}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => handleDeleteContact(obj.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
