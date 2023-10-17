import TaskCard from "../../_components/_tasks/TaskCard";
import { tasks } from "../../_data-to-read/tasks";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="p-10 flex justify-between flex-wrap gap-y-10">
        {tasks.map((task) => (
          <TaskCard key={task.name} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
