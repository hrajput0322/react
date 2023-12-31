import PropTypes from 'prop-types';
import styles from "./ToDoItem.module.css";
import { MdAutoDelete } from "react-icons/md";

function ToDoItem({ todoName, dueDate, onDeleteHandle }) {
  return (
    <div className={`${styles.item} container`}>
      <div className="row content-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {dueDate}
        </div>
        <div className="col-2">
          <button className="btn btn-danger form-control" onClick={() => {onDeleteHandle(todoName)}}><MdAutoDelete /></button>
        </div>
      </div>
    </div>
  );
}

ToDoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  onDeleteHandle: PropTypes.func.isRequired
};

export default ToDoItem;