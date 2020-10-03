import React from "react";

//import componets
import Todo from "./Todo";

const Todolist = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
