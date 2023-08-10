import React, { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    /* validation */
    if (todoText === "") {
      alert("Please type your todo");
      return;
    }
    console.log(todoText);
    const newTodo = {
      id: new Date().getTime(),
      title: todoText,
      date: new Date(),
      hasDone: false,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    setTodoText("");
  };
  const deleteTodo=(id)=>{
    const filteredTodos=todos.filter(i => i.id !==id)
    setTodos(filteredTodos)
  }
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            value={todoText}
            onChange={(event) => {
              setTodoText(event.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Type your todo"
          />
          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </div>
      </form>
      <div className="container">
        {todos.length === 0 ? (
          <p className="text-center">You dont have any todos yet</p>
        ) : (
          <div>
            {todos.map((item, index) => (
              <div key={index} style={{borderBottom:"1px solid gray"}} className="d-flex justify-content-between align-items-center">
                <div>
                  <h1
                    style={{
                      textDecoration:
                        item.hasDone === true ? "line-through" : "none",
                    }}
                    
                  >
                    {item.title}{" "}
                  </h1>
                  <small>{new Date(item.date).toLocaleDateString()}</small>
                </div>
                <div>
                  <button onClick={()=>{deleteTodo(item.id)}} 
                  className="btn btn-sm btn-danger">Delete</button>
                  <button className="btn btn-small btn-secondary">Edit</button>
                  <button className="btn btn-small btn-success">{item.hasDone === false ? "Done" :"Undone"}</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
