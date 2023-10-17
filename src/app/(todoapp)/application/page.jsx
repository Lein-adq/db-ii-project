import TaskCard from "../_components/TaskCard";

const Dashboard = () => {
  const tasks = [
    {
      name: "Frontend Development",
      description:
        "Create a responsive landing page using HTML, CSS, and Tailwind.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Frontend", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Backend Development",
      description: "Set up a Node.js server for your startup project.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Backend", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Database Integration",
      description:
        "Configure and connect MongoDB for your project's data storage.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Database", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "User Authentication",
      description:
        "Implement user authentication using JWT in your Node.js backend.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Security", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "React Components",
      description: "Build a user profile component in React.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Frontend", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "UI/UX Design",
      description:
        "Design a user-friendly interface for your study skills application.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Design", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "API Development",
      description:
        "Create RESTful APIs for managing user data in your application.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Backend", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Database Management",
      description: "Optimize and maintain the PostgreSQL database.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Database", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Docker Setup",
      description:
        "Containerize your application components with Docker for easier deployment.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "DevOps", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Code Refactoring",
      description:
        "Review and refactor existing code for better performance and maintainability.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Code Quality", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Product Design",
      description: "Develop wireframes for a new feature in your app.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Design", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Time Management Feature",
      description:
        "Implement a time tracking and management feature in your project.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Productivity", color: "#b8256f" },
        { name: "Web Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Leadership Training",
      description:
        "Read a book or take a course on leadership in the tech industry.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Leadership", color: "#b8256f" },
        { name: "Professional Development", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Business Strategy",
      description: "Research and outline a business strategy for your startup.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Business", color: "#b8256f" },
        { name: "Entrepreneurship", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
    {
      name: "Team Collaboration",
      description:
        "Set up communication and collaboration tools for your development team.",
      priority: 2,
      status: "To Do",
      labels: [
        { name: "Collaboration", color: "#b8256f" },
        { name: "Teamwork", color: "#b8256f" },
      ],
      createdAt: new Date(),
      deadline: new Date(),
    },
  ];

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
