import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

const ToDoItems = ( {items, onDeleteHandle} ) => {
    return (
        <div>
            {items.map((item)=> <ToDoItem key={item.todoName} todoName={item.todoName} dueDate={item.dueDate} onDeleteHandle={onDeleteHandle}></ToDoItem>)}
        </div>   
    );
}

ToDoItems.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteHandle: PropTypes.func.isRequired
  };

export default ToDoItems;