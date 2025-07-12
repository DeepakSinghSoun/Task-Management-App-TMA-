const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 border">
      <h3 className="font-bold text-lg">{task.title}</h3>
      <p className="text-gray-700">{task.description}</p>
      <div className="flex items-center gap-2 mt-2">
        <span className={`text-sm px-2 py-1 rounded font-semibold 
          ${task.priority === "High" ? "bg-red-500 text-white"
            : task.priority === "Medium" ? "bg-yellow-400 text-black"
            : "bg-yellow-200 text-black"}`}>
          {task.priority}
        </span>
        <span className="text-sm text-gray-600">{task.status}</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 border rounded hover:bg-gray-100">Edit</button>
        <button
          className="px-3 py-1 border rounded text-red-600 hover:bg-red-50"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
