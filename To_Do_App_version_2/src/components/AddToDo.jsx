import PropTypes from "prop-types";
import { useState } from "react";
function AddToDo( {onAddHandle} ) {

    const [enteredName, setEnteredName] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const onNameChange = (event) => {
      setEnteredName(event.target.value);
    }

    const onDateChange = (event) => {
      setEnteredDate(event.target.value);
    }

    const handleAdd = () => {
      onAddHandle(enteredName, enteredDate);
      setEnteredName("");
      setEnteredDate("");
    }

    return (
        <div className="container">
            <div className="row content-row">
          <div className="col-6">
            <input className="form-control" type="text" placeholder="Enter To-Do here" value={enteredName} onChange={onNameChange}></input>
          </div>
          <div className="col-4">
            <input className="form-control" type="date" value={enteredDate} onChange={onDateChange}></input>
          </div>
          <div className="col-2">
            <button className="btn btn-success form-control" onClick={handleAdd}>Add</button>
          </div>
        </div>
        </div>
    )
}

AddToDo.propTypes = {
  onAddHandle: PropTypes.func.isRequired,
};
export default AddToDo;