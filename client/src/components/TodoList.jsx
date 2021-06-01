import { DragDropContext, Droppable } from "react-beautiful-dnd";

import TodoItem from "./TodoItem";
import { useTaskActions, useTasks } from "../hooks/useTask";

export default function TodoList() {
  const { tasks } = useTasks();
  const { toggleTask, deleteTask, onReorderTasks } = useTaskActions();

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
