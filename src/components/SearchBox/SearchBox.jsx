import { useId } from "react";

import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, handleChange }) => {
  const searchId = useId();
  return (
    <div>
      <label htmlFor={searchId} className={css.label}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        id={searchId}
        onChange={(evt) => handleChange(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
