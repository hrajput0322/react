import PropTypes from "prop-types";
import { useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
function AddToDo( {onAddHandle} ) {

    const enteredName = useRef();
    const enteredDate = useRef();

    const handleAdd = (event) => {
      event.preventDefault();
      const enteredNameValue = enteredName.current.value;
      const enteredDateValue = enteredDate.current.value;
      enteredName.current.value = "";
      enteredDate.current.value = "";
      onAddHandle(enteredNameValue, enteredDateValue);
    }

    return (
        <div className="container">
          <form className="row content-row" onSubmit={handleAdd}>
            <div className="col-6">
              <input ref={enteredName} className="form-control" type="text" placeholder="Enter To-Do here"></input>
            </div>
            <div className="col-4">
              <input ref={enteredDate} className="form-control" type="date"></input>
            </div>
            <div className="col-2">
              <button className="btn btn-success form-control"><IoMdAddCircleOutline /></button>
            </div>
          </form>
        </div>
    )
}

AddToDo.propTypes = {
  onAddHandle: PropTypes.func.isRequired,
};
export default AddToDo;