function ToDoItem2() {
  let ToDoName = 'Learn React';
  let ToDoDate = '9-12-2023';
    return (
        <div className="container item">

        <div className="row  content-row">
          <div className="col-6">
            {ToDoName}
          </div>
          <div className="col-4">
            {ToDoDate}
          </div>
          <div className="col-2">
            <button className="btn btn-danger form-control">Delete</button>
          </div>
        </div>
      </div>
    )
}

export default ToDoItem2;