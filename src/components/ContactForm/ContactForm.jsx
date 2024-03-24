import { nanoid } from "nanoid";

const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name;
    const number = form.elements.number;

    handleAddContact({
      login: name.value,
      number: number.value,
      id: nanoid(),
    });
    
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name"></input>
      </label>
      <label>
        Number
        <input type="number" name="number"></input>
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
