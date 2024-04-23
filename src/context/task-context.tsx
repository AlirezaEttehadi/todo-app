"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  FC,
} from "react";

import { TaskListModel, TaskModel, TodoKey } from "todo-app/models/task";
import { loadState, persistState } from "todo-app/utils/storage";

interface TaskContextType {
  tasks: TaskListModel;
  addTask: (text: string) => void;
  clearAllTasks: () => void;
  clearTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  sortTasksByDate: (order: "asc" | "desc") => void;
  filterTasksByCompletion: (type: "all" | "completed" | "notCompleted") => void;
  reorderTasks: (startIndex: number, endIndex: number | undefined) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const TaskProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskListModel>([]);

  useEffect(() => {
    setTasks(loadState(TodoKey) || []);
  }, []);

  const addTask = (title: string) => {
    const newTask: TaskModel = {
      id: Date.now(),
      title,
      isCompleted: false,
      createdDate: new Date(),
    };
    setTasks([...tasks, newTask]);
    persistState(TodoKey, [...tasks, newTask], setTasks);
  };

  const clearAllTasks = () => {
    persistState(TodoKey, [], setTasks);
  };

  const clearTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    persistState(TodoKey, updatedTasks, setTasks);
  };

  const toggleTaskCompletion = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    persistState(TodoKey, updatedTasks, setTasks);
  };

  const sortTasksByDate = (order: "asc" | "desc") => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (!a.createdDate || !b.createdDate) return 0;
      return order === "asc"
        ? new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
        : new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
    });
    setTasks(sortedTasks);
  };

  const filterTasksByCompletion = (
    type: "all" | "completed" | "notCompleted"
  ) => {
    let persistedTasks: TaskListModel = loadState(TodoKey) || [];
    let filteredTasks: TaskListModel;
    switch (type) {
      case "completed":
        filteredTasks = persistedTasks.filter((task) => task.isCompleted);
        break;
      case "notCompleted":
        filteredTasks = persistedTasks.filter((task) => !task.isCompleted);
        break;
      default:
        filteredTasks = persistedTasks;
    }
    setTasks(filteredTasks);
  };

  const reorderTasks = (startIndex: number, endIndex: number | undefined) => {
    if (typeof endIndex === "number") {
      const updatedTasks = [...tasks];
      const [removedTask] = updatedTasks.splice(startIndex, 1);
      updatedTasks.splice(endIndex, 0, removedTask);
      persistState(TodoKey, updatedTasks, setTasks);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        clearAllTasks,
        clearTask,
        toggleTaskCompletion,
        sortTasksByDate,
        filterTasksByCompletion,
        reorderTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
