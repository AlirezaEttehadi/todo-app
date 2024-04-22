import { Badge, Button, Checkbox, Select, TextInput } from "flowbite-react";

export default function Home() {
  return (
    <div className="flex py-12 px-6 items-center flex-col min-h-screen">
      <h1>Todo App</h1>
      <div className="flex items-center gap-4 my-8">
        <TextInput type="text" />
        <Button>Add Task</Button>
      </div>
      <div className="flex items-center gap-4 mb-8">
        <Select>
          <option>Newest</option>
          <option>Oldest</option>
        </Select>
        <Select>
          <option>All</option>
          <option>Active</option>
          <option>Completed</option>
        </Select>
        <Button color="failure">Clear Completed</Button>
      </div>

      <div className="bg-white rounded-xl p-4 w-full max-w-md">
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
    </div>
  );
}
