import React from "react";

const ItemLiTag = ({ element, handleDelete, handleCheck }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={element.checked}
        onChange={() => {
          handleCheck(element.id);
        }}
      />
      <label
        onDoubleClick={() => {
          handleCheck(element.id);
        }}
        style={element.checked ? { textDecoration: "line-through" } : null}
      >
        {element.text}
      </label>
      <button onClick={() => handleDelete(element.id)}> Delete</button>
    </li>
  );
};

export default ItemLiTag;
