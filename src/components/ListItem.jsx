import React from "react";
import ItemLiTag from "./ItemLiTag";

const ListItem = ({ items, handleDelete, handleCheck }) => {
  return (
    <ul>
      {items.map((el) => (
        <ItemLiTag
          key={el.id}
          element={el}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ListItem;
