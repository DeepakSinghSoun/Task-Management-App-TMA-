import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks added yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default TaskList;
