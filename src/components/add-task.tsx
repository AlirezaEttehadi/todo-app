"use client";

import { Button, TextInput } from "flowbite-react";

import { useTaskContext } from "todo-app/context/task-context";

export default function AddTask() {
  const { addTask } = useTaskContext();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    addTask(event.target.task.value);
    event.target.task.value = "";
  };

  return (
    <form className="flex items-center gap-4" onSubmit={handleSubmit}>
      <TextInput type="text" required name="task" />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
