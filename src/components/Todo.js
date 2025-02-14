import React from "react";
import ToDoItem from "./ToDoItem";

function ToDo({ toDoItems, onDelete }) {
  return (
    <>
      {toDoItems.map((item) => (
        <ToDoItem toDoItem={item} onDelete={onDelete}/>
      ))}
    </>
  );
}

export default ToDo;
