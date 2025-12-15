import { Link } from "react-router-dom";

function TodoCard({ todo, onDelete }) {
  return (
    <div className="todo-card">
      {todo.image && <img src={todo.image} />}

      <div>
        <span className={`badge ${todo.status}`}>{todo.status}</span>

        <h3>{todo.title}</h3>

        <Link className="btn btn-secondary" to={`/todos/${todo.id}/edit`}>
          Edit
        </Link>

        <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
