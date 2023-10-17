"use client";
import { useState } from "react";
import { priorities } from "../../_data-to-read/priorities";
import { labels } from "../../_data-to-read/labels";

import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import CalendarDatePicker from "../_calendar/CalendarDatePicker";

const CreateTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState(null);
  const [taskLabels, setTaskLabels] = useState(new Set([]));
  const [taskDeadline, setTaskDeadline] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new task object
    const newTask = {
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      status: "To Do",
      labels: taskLabels,
      createdAt: new Date(),
      deadline: taskDeadline,
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    // Clear the form
    setTaskName("");
    setTaskDescription("");
    setTaskPriority(null);
    setTaskLabels([]);
    setTaskDeadline(new Date());
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        label="Task Name"
        placeholder="Enter your Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <Input
        label="Task Description"
        placeholder="Enter your Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />

      <Select
        items={priorities}
        label="Priority"
        placeholder="Select your task's priority"
        selectedKeys={taskPriority}
        onSelectionChange={setTaskPriority}
      >
        {(priority) => (
          <SelectItem key={priority.value}>{priority.label}</SelectItem>
        )}
      </Select>

      <Select
        items={labels}
        label="Labels"
        selectionMode="multiple"
        placeholder="Select your task's labels"
        selectedKeys={taskLabels}
        onSelectionChange={setTaskLabels}
      >
        {(label) => <SelectItem key={label.id}>{label.name}</SelectItem>}
      </Select>

      <CalendarDatePicker />
    </form>
  );
};

export default CreateTaskForm;
