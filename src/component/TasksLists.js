import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlices";
import { Link } from "react-router-dom";

function TasksLists() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between item-center py-4">
        <h1>Tasks {tasks.length}</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 py-1 px-2 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((tasks) => (
          <div key={tasks.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{tasks.title}</h3>
              <div className="flex gap-x-2">
                <Link to={`/edit-task/${tasks.id}`}
                className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                >Edit</Link>
                <button
                  onClick={() => handleDelete(tasks.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{tasks.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksLists;
