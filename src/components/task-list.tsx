"use client";

import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";

import Task from "./task";
import { StrictModeDroppable } from "./dropable";
import { useTaskContext } from "todo-app/context/task-context";

export default function TaskList() {
  const { tasks, reorderTasks } = useTaskContext();
  const onDragEnd = (result: DropResult) => {
    reorderTasks(result.source.index, result.destination?.index);
  };
  return (
    <div className="w-full max-w-md">
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-4"
                    >
                      <Task key={task.id} task={task} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
}
