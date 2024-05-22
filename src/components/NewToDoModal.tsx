import { useState } from "react";
import { addTodo } from "../api/api";

export default function NewToDoModal({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}) {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async () => {
    const newID = await addTodo({
      title: title,
      notes: notes,
      completed: false,
    });
    console.log("Added new item with ID: ", newID);
    closeModal();
  };

  return (
    <div>
      {modalOpen && (
        <div className="modal-background">
          <div className="modal">
            <h3>New Item</h3>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={(e) => setNotes(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
