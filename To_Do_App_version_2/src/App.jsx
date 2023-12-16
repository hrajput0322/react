import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItems from "./components/ToDoItems"
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import Items from "./store/ItemsStore";

import "./app.css"

function App() {
  const [items, setItems] = useState([
  ]);

  const onAddHandle = (enteredName, enteredDate) => {
    setItems((currValue)=>
    [...currValue, {todoName: enteredName, dueDate: enteredDate}])
  }

  const onDeleteHandle = (nameToDelete) => {
    const newItems = items.filter(item => item.todoName !== nameToDelete);
    setItems(newItems);
  }

  return (
    <Items.Provider value={items}>
      <center>
      <AppName />
      <AddToDo onAddHandle={onAddHandle}/>
      <WelcomeMessage />
      <ToDoItems onDeleteHandle={onDeleteHandle}/>
    </center>
    </Items.Provider>
  )
}

export default App
