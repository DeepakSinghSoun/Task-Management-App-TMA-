import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = () => {
    if (!title || !description) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status: "Pending",
    };

    onAdd(newTask);
    setTitle("");
    setDescription("");
    setPriority("Low");
  };

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-4 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-4 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="border p-2 w-full mb-4 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
