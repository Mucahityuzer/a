import React,{useState} from "react";

function App() {
  const[todoText,setTodoText]=useState("")

  const handleSubmit=(event)=>{
    event.preventDefault()
    /* validation */
    if(todoText === ""){
      alert("Please type your todo")
      return
    }
  }
  return (
    <div className="container my-5" >
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
          value={todoText}
          onChange={(event)=>{
            setTodoText(event.target.value)
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
    </div>
  );
}

export default App;
/* sd,föfsöld*/