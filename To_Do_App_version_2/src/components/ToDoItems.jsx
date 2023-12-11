import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

const ToDoItems = ( {items} ) => {
    return (
        <div>
            {items.map((item)=> <ToDoItem key={item.todoName} todoName={item.todoName} dueDate={item.dueDate}></ToDoItem>)}
        </div>   
    );
}

ToDoItems.propTypes = {
    items: PropTypes.array.isRequired
  };

export default ToDoItems;