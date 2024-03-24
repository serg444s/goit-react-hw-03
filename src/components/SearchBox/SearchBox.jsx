const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={inputValue}
        onChange={(evt) => handleChange(evt.target.value)}
      />
    </label>
  );
};

export default SearchBox;
