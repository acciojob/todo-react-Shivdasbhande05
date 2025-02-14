import React, { useState } from "react";
import Heading from "./heading"
import './../styles/App.css';
import AddToDo from "./AddTodo";
import ToDo from "./Todo";


const App = () => {

  let [toDoItems, setToDoItems] = useState([]);

  function handleNewItem(itemName){
    let newItem = [...toDoItems,{ name : itemName }]
    setToDoItems(newItem);
  }

  function handleDelete(itemName){
    let newItems = toDoItems.filter(item => item.name !== itemName);

    setToDoItems(newItems);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <Heading/>
        <AddToDo handleNewItem={handleNewItem}/>
        <ToDo toDoItems={toDoItems} onDelete={handleDelete}/>
        <button></button>
    </div>
  )
}

export default App
