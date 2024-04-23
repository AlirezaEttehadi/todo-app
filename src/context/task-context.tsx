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

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
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
