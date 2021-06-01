import { DragDropContext, Droppable } from "react-beautiful-dnd";

import TodoItem from "./TodoItem";

export default function TodoList({ actions }) {
  const { tasks, toggleTask, deleteTask, onReorderTasks } = actions;

  const onDragEnd = (result) => {
    onReorderTasks(tasks, result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="task">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks?.map((task, i) => (
              <TodoItem
                key={task.id}
                index={i}
                task={task}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
