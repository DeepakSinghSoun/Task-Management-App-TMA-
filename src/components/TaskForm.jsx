const Form = () => {
  return (
    <>
        <h1 className="text-2xl font-bold mb-4">Add New Task</h1>

        <label className="block mb-2 font-medium">Title</label>
        <input
            type="text"
            placeholder="Enter task title"
            className="border p-2 w-full mb-4 rounded"
        />

        <label className="block mb-2 font-medium">Description</label>
        <textarea
            placeholder="Enter task description"
            className="border p-2 w-full mb-4 rounded h-32 resize-none"
        />

        <label className="block mb-2 font-medium">Priority</label>
        <select
            className="border p-2 w-full mb-4 rounded"
            defaultValue=""
        >
            <option value="" disabled>
                Select Priority
            </option>
            <option value="High">🔥 High (Urgent)</option>
            <option value="Medium">💼 Medium (Normal)</option>
            <option value="Low">🕓 Low (Not urgent)</option>
        </select>


        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Task
        </button>
    </>
  );
};

export default Form;
