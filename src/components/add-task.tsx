"use client";

import { Button, TextInput } from "flowbite-react";

export default function AddTask() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form className="flex items-center gap-4" onSubmit={handleSubmit}>
      <TextInput type="text" required />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
