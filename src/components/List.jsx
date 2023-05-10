import React from "react";

const List = ({ title, id, body }) => {
  return (
    <ul>
      <li>
        <p>{title}</p>
        <p>{id}</p>
        <p>{body}</p>
      </li>
    </ul>
  );
};

export default List;
