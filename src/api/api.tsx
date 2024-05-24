import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { ToDoItem } from "../types";

const firebaseConfig = {
  apiKey: "AIzaSyCEOjKZhvmjHOMM90acWNOP_MWZTIPOIgM",
  authDomain: "to-do-list-app-1258d.firebaseapp.com",
  projectId: "to-do-list-app-1258d",
  storageBucket: "to-do-list-app-1258d.appspot.com",
  messagingSenderId: "301930368455",
  appId: "1:301930368455:web:5d13033c0994a7ed9adde2",
  measurementId: "G-N4YWKVTE7M",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchTodos = async () => {
  const todosCollection = collection(db, "todoItems");
  const todosSnapshot = await getDocs(todosCollection);
  const todosList = todosSnapshot.docs.map((doc) => {
    return doc.data() as ToDoItem;
  });
  return todosList;
};

export const addTodo = async (todo: ToDoItem) => {
  const docRef = await addDoc(collection(db, "todoItems"), todo);
  return docRef.id;
};
