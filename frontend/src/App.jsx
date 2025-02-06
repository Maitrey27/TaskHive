import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => setTodos(data.todos));
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id) => {
    fetch("http://localhost:3000/todo/completed", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      setTodos((prev) =>
        prev.map((t) => (t._id === id ? { ...t, completed: true } : t))
      );
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <h1 className="text-4xl font-extrabold text-white shadow-md">📌 Todo App</h1>
      <CreateTodo addTodo={addTodo} />
      <Todos todos={todos} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
