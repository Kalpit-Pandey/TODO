const STORAGE_KEY = "todos";

export const getTodos = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const getTodoById = (id) => {
  return getTodos().find(todo => todo.id === Number(id));
};

export const createTodo = (todo) => {
  const todos = getTodos();
  todos.push(todo);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const updateTodo = (updatedTodo) => {
  const todos = getTodos().map(todo =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const deleteTodo = (id) => {
  const todos = getTodos().filter(todo => todo.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};
