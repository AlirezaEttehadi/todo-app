import { Button, Select } from "flowbite-react";

export default function FilterBox() {
  return (
    <div className="flex items-center gap-4">
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
  );
}
