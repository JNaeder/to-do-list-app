import "./App.css";
import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import NewToDoModal from "./components/NewToDoModal";
import { ToDoItem } from "./types/ToDoItem";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEOjKZhvmjHOMM90acWNOP_MWZTIPOIgM",
  authDomain: "to-do-list-app-1258d.firebaseapp.com",
  projectId: "to-do-list-app-1258d",
  storageBucket: "to-do-list-app-1258d.appspot.com",
  messagingSenderId: "301930368455",
  appId: "1:301930368455:web:5d13033c0994a7ed9adde2",
  measurementId: "G-N4YWKVTE7M",
};

function App() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [todos, setTodos] = useState<ToDoItem[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosCollection = collection(db, "todoItems");
      const todosSnapshot = await getDocs(todosCollection);
      const todosList = todosSnapshot.docs.map((doc) => {
        return doc.data() as ToDoItem;
      });
      setTodos(todosList);
    };

    fetchTodos();
  }, []);

  const addTodo = () => {
    console.log("Open ToDo modal");
    setModalOpen(true);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={i} todoItem={todo} />
        ))}
      </ul>
      <NewToDoModal modalOpen={modalOpen} />
    </div>
  );
}

export default App;
