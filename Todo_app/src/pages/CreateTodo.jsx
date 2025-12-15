import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../services/todoService";

function CreateTodo() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    image: "",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({
      ...form,
      id: Date.now(),
    });
    navigate("/todos");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create Todo</h1>

        <input
          required
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <select onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <input type="file" onChange={handleImage} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateTodo;
