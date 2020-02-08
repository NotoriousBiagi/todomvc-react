import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/todos"
});

const TodoService = {
  reset: () => API.delete("/reset"),
  get: () => API.get("/"),
  put: todo => API.put(`/${todo.id}`, todo),
  post: todo => API.post("/", todo),
  delete: id => API.delete(`/${id}`)
};

export default TodoService;
