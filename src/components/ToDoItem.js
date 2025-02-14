import React from "react";
function ToDoItem({ toDoItem,onDelete }) {


  return (
    <>
      <div>{toDoItem}</div>
      <button onClick={toDoItem}>Delete</button>
    </>
  );
}

export default ToDoItem;
