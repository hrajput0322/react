import { useContext } from "react";
import { Items } from "../store/ItemsStore";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

const ToDoItems = ( {onDeleteHandle} ) => {
    const items = useContext(Items);
    return (
        <div>
            {items.map((item)=> <ToDoItem key={item.todoName} todoName={item.todoName} dueDate={item.dueDate} onDeleteHandle={onDeleteHandle}></ToDoItem>)}
        </div>   
    );
}

ToDoItems.propTypes = {
    onDeleteHandle: PropTypes.func.isRequired
  };

export default ToDoItems;