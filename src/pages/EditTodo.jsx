import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodoById, updateTodo } from "../services/todoService";

function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    setTodo(getTodoById(id));
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setTodo({ ...todo, image: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo);
    navigate("/todos");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Edit Todo</h1>

        <input
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />

        <textarea
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />

        <select
          value={todo.status}
          onChange={(e) => setTodo({ ...todo, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <input type="file" onChange={handleImage} />

        {todo.image && <img src={todo.image} width="100" />}

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditTodo;
