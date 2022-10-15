import { React, useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        type={"text"}
        placeholder="Add Item"
        id="addItem"
        required
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />

      <button
        type="submit"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
