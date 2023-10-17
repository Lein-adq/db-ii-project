import { Button } from "@nextui-org/button";
import TaskListIcon from "./_icons/Task-List-Icon";

const SideBar = () => {
  return (
    <nav
      id="sidebar"
      className="relative min-w-[300px] h-full overflow-y-auto bg-zinc-800 p-4"
    >
      <div className="flex gap-4 items-center p-4">
        <TaskListIcon />
        <h1 className="text-2xl font-bold">To Do App</h1>
      </div>

      <div className="flex flex-col gap-2 text-lg">
        <Button
          variant="light"
          color="default"
          className="font-medium text-base text-slate-200"
        >
          Create a new Task
        </Button>
        <Button
          variant="light"
          color="default"
          className="font-medium text-base text-slate-200"
        >
          View pending tasks
        </Button>
        <Button
          variant="light"
          color="default"
          className="font-medium text-base text-slate-200"
        >
          View completed tasks
        </Button>
      </div>
    </nav>
  );
};

export default SideBar;
