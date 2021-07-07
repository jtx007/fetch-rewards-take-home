import React from "react";

const ListItem = ({ listItem, handleToggle }) => {
  const { name, listId } = listItem;
  return (
    <div className="list-item-card">
      <h2 className="list-id">{listId}</h2>
      <span className="name">{name}</span>
      <button className="danger-btn" onClick={handleToggle}>
        Close Group
      </button>
    </div>
  );
};

export default ListItem;
