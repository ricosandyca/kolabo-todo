import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import TodoItem from "./TodoItem";

export default function TodoList({ actions }) {
  const {
    tasks,
    doneTasks,
    toggleTask,
    deleteTask,
    updateTask,
    onReorderTasks,
  } = actions;

  return (
    <DragDropContext onDragEnd={onReorderTasks}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            {tasks?.map((task, i) => (
              <TodoItem
                key={task.id}
                index={i}
                task={task}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
                onUpdateTask={updateTask}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <Divider style={{ marginBottom: "28px" }} />
      <Box>
        <Droppable droppableId="done_tasks">
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps}>
              {doneTasks?.map((task, i) => (
                <TodoItem
                  key={task.id}
                  index={i}
                  task={task}
                  onToggleTask={toggleTask}
                  onDeleteTask={deleteTask}
                  onUpdateTask={updateTask}
                />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>
    </DragDropContext>
  );
}
