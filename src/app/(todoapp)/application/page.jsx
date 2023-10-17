"use client";

import TaskCard from "../_components/TaskCard";


/*
const tasks = [
  {
    name: "Frontend Development",
    description:
      "Create a responsive landing page using HTML, CSS, and Tailwind.",
    priority: 2,
    status: "To Do",
    labels: [
      {
        id:"652b7578203c157628b3901d",
        name: "Frontend", color: "#b8256f" },
      { name: "Web Development", color: "#b8256f" },
    ],
    createdAt: new Date(),
    deadline: new Date(),
  }
];*/
const url = "http://localhost:1234/dashboard/1";

const options = {
    method: "GET",

};
async function dashboardApiJson() {
  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parsea la respuesta como JSON

    if (response.ok) {
      const tasksArray = result.task;

      console.log(tasksArray);
      return tasksArray;
    } else {
      console.error("Error en la solicitud:", result);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

const Dashboard = () => {
  
  //const tasks = dashboardApiJson();

  return (
    <div className="w-full">
      <div className="p-10 flex justify-between flex-wrap gap-y-10">
        {
          dashboardApiJson().map((task) => <TaskCard key={task.name} task={task} />)}
      </div>
    </div>
  );
};

export default Dashboard;