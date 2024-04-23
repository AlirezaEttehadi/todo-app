"use client";

import { useEffect, useState } from "react";
import { Droppable, DroppableProps } from "react-beautiful-dnd";

// https://medium.com/@dimplevarshney06/react-beautiful-dnd-unable-to-find-draggable-with-id-item-2-9c8cf8d109cd#:~:text=The%20warning%20message%20Unable%20to,is%20managing%20the%20draggable%20elements.
// this component is written because of use strict mode in react. It had conflict with dnd

export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props}>{children}</Droppable>;
};
