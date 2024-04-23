"use client";

import { Badge, Button, Checkbox } from "flowbite-react";
import { FC } from "react";
import dayjs from "dayjs";
import clsx from "clsx";

import { TaskModel } from "todo-app/models/task";
import { useTaskContext } from "todo-app/context/task-context";

interface Props {
  task: TaskModel;
}

const Task: FC<Props> = ({ task }) => {
  const { clearTask, toggleTaskCompletion } = useTaskContext();

  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center">
          <Checkbox
            checked={task.isCompleted}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span
            className={clsx("text-gray-900", {
              "line-through": task.isCompleted,
            })}
          >
            {task.title}
          </span>
        </div>
        {task.isCompleted && <Badge color="success">Completed</Badge>}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600 text-sm">
          {dayjs(task.createdDate).format("D MMM YYYY")}
        </span>
        <Button color="failure" size="xs" onClick={() => clearTask(task.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Task;
