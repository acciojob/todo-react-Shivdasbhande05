import React, { useState } from "react";
function AddToDo({ handleNewItem }) {
    const [todoItem,setToDoItem] = useState('');

    function handleTodoName(event){
        setToDoItem(event.target.value);
    }

    function handleAddClicked(){
        handleNewItem(todoItem);
        setToDoItem("");
    }

  return (
    <>
      <input type="text" onChange={handleTodoName}/>
      <button onClick={handleAddClicked}>Add Todo</button>
    </>
  );
}

export default AddToDo;
