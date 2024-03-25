import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";

const Contact = ({ obj, handleDeleteContact }) => {
  return (
    <div>
      <p>
        <FaUser />
        {obj.name}
      </p>

      <p>
        <FaPhone />
        {obj.number}
      </p>
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
