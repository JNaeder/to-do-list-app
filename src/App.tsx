import "./App.css";
import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import NewToDoModal from "./components/NewToDoModal";
import { ToDoItem } from "./types/ToDoItem";
import { fetchTodos } from "./api/api";

function App() {
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const todosList = await fetchTodos();
      setTodos(todosList);
    };

    getData();
  }, []);

  const addTodo = () => {
    console.log("Open ToDo modal");
    setModalOpen(true);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <button onClick={addTodo}>Add</button>
      <div>
        {todos.map((todo, i) => (
          <TodoItem key={i} todoItem={todo} />
        ))}
      </div>
      <NewToDoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default App;
