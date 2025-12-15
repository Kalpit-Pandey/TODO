import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos, deleteTodo } from "../services/todoService";
import TodoCard from "../components/TodoCard";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTodos(getTodos());
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteTodo(id);
      setTodos(getTodos());
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Todo List</h1>

      <Link className="btn btn-primary" to="/todos/create">
        + Create Todo
      </Link>

      <br />
      <br />

      {todos.length === 0 && <p>No todos found</p>}

      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TodoList;
