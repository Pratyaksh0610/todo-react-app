import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todo } from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CreateTodo />
      <Todo />
    </div>
  );
}

export default App;
