"use client";

import AddTask from "todo-app/components/add-task";
import FilterBox from "todo-app/components/filter-box";
import TaskList from "todo-app/components/task-list";
import { TaskProvider } from "todo-app/context/task-context";

export default function Home() {
  return (
    <div className="flex py-12 px-6 gap-6 items-center flex-col min-h-screen">
      <h1>Todo App</h1>
      <TaskProvider>
        <AddTask />
        <FilterBox />
        <TaskList />
      </TaskProvider>
    </div>
  );
}
