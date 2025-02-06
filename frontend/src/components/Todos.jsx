export function Todos({ todos, updateTodo }) {
  return (
    <div className="max-w-lg mx-auto mt-6">
      {todos.length === 0 ? (
        <p className="text-center text-white text-lg">No todos yet! 🎉</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo._id}
            className="flex justify-between items-center bg-white/30 backdrop-blur-md p-4 rounded-lg shadow-lg mb-3 transition transform hover:scale-105 border border-white/20"
          >
            <div>
              <h3 className={`text-lg font-bold ${todo.completed ? "line-through text-gray-300" : "text-white"}`}>
                {todo.title}
              </h3>
              <p className="text-gray-200">{todo.description}</p>
            </div>
            <button
              className={`py-1 px-4 rounded-lg text-white font-semibold ${
                todo.completed ? "bg-green-500" : "bg-blue-500"
              } hover:bg-opacity-80 transition`}
              onClick={() => updateTodo(todo._id)}
            >
              {todo.completed ? "✔ Done" : "✅ Complete"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
