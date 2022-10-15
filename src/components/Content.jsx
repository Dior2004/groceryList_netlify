import React from "react";
import ListItem from "./ListItem";

const Content = ({ items, handleDelete, handleCheck, search }) => {
  return (
    <>
      {items.length ? (
        <ListItem
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>{search.length ? "Nothing found" : "No items added yet"}</p>
      )}
    </>
  );
};

export default Content;
