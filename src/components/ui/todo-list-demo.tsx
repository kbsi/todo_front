import * as React from "react";
import { TodoItem, type Todo } from "@/components/ui/to-do-item";

const todosData: Todo[] = [
  { id: 1, title: "Complete documentation", completed: false },
  { id: 2, title: "Review pull requests", completed: false },
  { id: 3, title: "Update dependencies", completed: false },
];

export function TodoListDemo() {
  const [todos, setTodos] = React.useState(todosData);
  const [show, setShow] = React.useState<number | null>(null);
  const [newTodo, setNewTodo] = React.useState("");

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    
    const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    setTodos((prev) => [
      ...prev,
      { id: newId, title: newTodo.trim(), completed: false },
    ]);
    setNewTodo("");
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <form onSubmit={handleAddTodo} className="flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      
      <div className="flex flex-col gap-2 w-full">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={handleToggle}
            onDelete={handleDelete}
            showActions={show}
            onShowActions={setShow}
          />
        ))}
      </div>
    </div>
  );
}