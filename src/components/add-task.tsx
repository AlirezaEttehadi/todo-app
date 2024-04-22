import { Button, TextInput } from "flowbite-react";

export default function AddTask() {
  return (
    <div className="flex items-center gap-4">
      <TextInput type="text" />
      <Button>Add Task</Button>
    </div>
  );
}
