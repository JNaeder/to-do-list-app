import { ToDoItem } from "../types/ToDoItem";

export default function TodoItem({ todoItem }: { todoItem: ToDoItem }) {
  return (
    <li>
      <h3>{todoItem.title}</h3>
      <p>{todoItem.notes}</p>
    </li>
  );
}
