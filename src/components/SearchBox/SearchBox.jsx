import { useState } from "react";

const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={inputValue} onChange={handleChange} />
    </label>
  );
};

export default SearchBox;
