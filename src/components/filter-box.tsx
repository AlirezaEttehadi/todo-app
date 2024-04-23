"use client";

import { Button, Select } from "flowbite-react";

import { useTaskContext } from "todo-app/context/task-context";

export default function FilterBox() {
  const { clearAllCompletedTasks, sortTasksByDate, filterTasksByCompletion } =
    useTaskContext();
  return (
    <div className="flex items-center gap-4">
      <Select
        onChange={(event) =>
          sortTasksByDate(event.target.value as "default" | "asc" | "desc")
        }
      >
        <option value="default">Default</option>
        <option value="desc">Newest</option>
        <option value="asc">Oldest</option>
      </Select>
      <Select
        onChange={(event) =>
          filterTasksByCompletion(
            event.target.value as "all" | "completed" | "notCompleted"
          )
        }
      >
        <option value="all">All</option>
        <option value="notCompleted">Active</option>
        <option value="completed">Completed</option>
      </Select>
      <Button color="failure" onClick={() => clearAllCompletedTasks()}>
        Clear Completed
      </Button>
    </div>
  );
}
