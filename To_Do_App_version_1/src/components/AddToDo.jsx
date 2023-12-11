function AddToDo() {
    return (
        <div className="container">
            <div className="row content-row">
          <div className="col-6">
            <input className="form-control" type="text" placeholder="Enter To-Do here"></input>
          </div>
          <div className="col-4">
            <input className="form-control" type="date"></input>
          </div>
          <div className="col-2">
            <button className="btn btn-success form-control">Add</button>
          </div>
        </div>
        </div>
    )
}

export default AddToDo;