import Task from "./task";

export default function TaskList() {
  return (
    <div className="w-full max-w-md flex flex-col gap-4">
      {[1, 2, 3, 4].map((task) => {
        return <Task />;
      })}
    </div>
  );
}
