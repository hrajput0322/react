import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItems from "./components/ToDoItems"
import "./app.css"

function App() {
  const items = [
    {
      todoName: "Study DSA",
      dueDate: "10-12-2023"
    },
    {
      todoName: "Learn React",
      dueDate: "10-12-2023"
    },
    {
      todoName: "Go to Gym",
      dueDate: "10-12-2023"
    }
];

  return (
    <center>
      <AppName />
      <AddToDo />
      <ToDoItems items={items}/>
    </center>
  )
}

export default App
