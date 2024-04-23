"use client";

import { Button, Select } from "flowbite-react";

import { useTaskContext } from "todo-app/context/task-context";

export default function FilterBox() {
  const { clearAllTasks } = useTaskContext();
  return (
    <div className="flex items-center gap-4">
      <Select>
        <option>Newest</option>
        <option>Oldest</option>
      </Select>
      <Select>
        <option>All</option>
        <option>Active</option>
        <option>Completed</option>
      </Select>
      <Button color="failure" onClick={() => clearAllTasks()}>
        Clear Completed
      </Button>
    </div>
  );
}
