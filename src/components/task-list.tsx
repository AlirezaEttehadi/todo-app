"use client";

import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";

import Task from "./task";
import { StrictModeDroppable } from "./dropable";

const tasks = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
];

export default function TaskList() {
  const onDragEnd = (result: DropResult) => {
    console.log(result);
  };
  return (
    <div className="w-full max-w-md">
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mb-4"
                    >
                      <Task key={task.id} />
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
