import { Badge, Button, Checkbox } from "flowbite-react";
import { FC } from "react";

import { TaskModel } from "todo-app/models/task";

interface Props {
  task: TaskModel;
}

const Task: FC<Props> = ({ task }) => {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center">
          <Checkbox checked={task.isCompleted} />
          <span className="text-gray-900">{task.title}</span>
        </div>
        {task.isCompleted && <Badge color="success">Completed</Badge>}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600 text-sm">2024/12/12</span>
        <Button color="failure" size="xs">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Task;
