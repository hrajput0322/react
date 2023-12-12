import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItems from "./components/ToDoItems"
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import "./app.css"

function App() {
  const [items, setItems] = useState([
  ]);

  const onAddHandle = (enteredName, enteredDate) => {
    const newItems = [...items, {
      todoName: enteredName,
      dueDate: enteredDate
    }]
    setItems(newItems);
  }

  const onDeleteHandle = (nameToDelete) => {
    const newItems = items.filter(item => item.todoName !== nameToDelete);
    setItems(newItems);
  }

  return (
    <center>
      <AppName />
      <AddToDo onAddHandle={onAddHandle}/>
      {items.length===0 && <WelcomeMessage />}
      <ToDoItems items={items} onDeleteHandle={onDeleteHandle}/>
    </center>
  )
}

export default App
