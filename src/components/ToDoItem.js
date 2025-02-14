import React from "react";
function ToDoItem({ toDoItem,onDelete }) {


  return (
    <>
      <div>{toDoItem.name}</div>
      <button onClick={toDoItem.name}>Delete</button>
    </>
  );
}

export default ToDoItem;
