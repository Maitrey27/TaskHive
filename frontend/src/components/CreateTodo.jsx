import { useState } from "react";

export function CreateTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-type": "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        addTodo(data.todo);
        setTitle("");
        setDescription("");
      });
  };

  return (
    <div className="flex flex-col bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4">Add a Todo</h2>
      <input
        className="w-full p-2 border border-white/20 bg-transparent text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border border-white/20 bg-transparent text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold"
        onClick={handleSubmit}
      >
        ➕ Add Todo
      </button>
    </div>
  );
}
