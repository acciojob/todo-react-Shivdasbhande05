import React from "react";
import ToDoItem from "./ToDoItem";

function ToDo({ toDoItems, onDelete }) {
  return (
    <> <ul>
        {toDoItems.map((item) => (
        <li>
            <ToDoItem toDoItem={item.name} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
    </>
  );
}

export default ToDo;
