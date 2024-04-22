import { Badge, Button, Checkbox } from "flowbite-react";

export default function Task() {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center">
          <Checkbox />
          <span className="text-gray-900">Task 1</span>
        </div>
        <Badge color="success">Completed</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600 text-sm">2024/12/12</span>
        <Button color="failure" size="xs">
          Delete
        </Button>
      </div>
    </div>
  );
}
