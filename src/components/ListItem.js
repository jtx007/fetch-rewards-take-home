import React from "react";

const ListItem = ({ listItem }) => {
  const { name, listId } = listItem;
  return (
    <div className="list-item-card">
      <h2 className="list-id">{listId}</h2>
      <span className="name">{name}</span>
    </div>
  );
};

export default ListItem;
