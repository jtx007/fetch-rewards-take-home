import React, { useState } from "react";
import ListItem from "./ListItem";

const ListContainer = ({ listId, listItems }) => {
  const [toggle, setToggle] = useState(false);

  //  button that toggles displaying of list items
  const handleToggle = () => {
    setToggle(!toggle);
  };

  //   Helper functions
  const displayListItems = () => {
    return listItems.map((listItem) => {
      return (
        <ListItem
          key={listItem.id}
          listItem={listItem}
          handleToggle={handleToggle}
        />
      );
    });
  };

  //   Conditional rendering
  return (
    <>
      {toggle ? (
        displayListItems()
      ) : (
        <div className="list-container">
          <h1>List {listId}</h1>
          <button
            data-testid="toggle"
            onClick={handleToggle}
            className="primary-btn"
          >
            Expand
          </button>
        </div>
      )}
    </>
  );
};

export default ListContainer;
