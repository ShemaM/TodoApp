import React, { useState } from "react";
import "./App.css";

//importing component
import Form from "./componets/Form";
import Todolist from "./componets/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  return (
    <div className="App">
      <header>
        <h1>Chris Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
