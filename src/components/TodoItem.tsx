import { ToDoItem } from "../types";

export default function TodoItem({ todoItem }: { todoItem: ToDoItem }) {
  return (
    <div className="todoItem">
      <h3>{todoItem.title}</h3>
    </div>
  );
}
