import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    handleAddContact({
      name: form.elements.name.value,
      number: form.elements.number.value,
      id: nanoid(),
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input type="text" name="name"></input>
      </label>
      <label>
        Number
        <input type="number" name="number"></input>
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
