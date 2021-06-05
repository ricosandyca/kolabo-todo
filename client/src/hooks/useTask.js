import { useCallback, useEffect, useState } from "react";

import { generateId } from "../services/firestore";
import { getUserListener, replaceTasks } from "../services/firestore/user";
import { getCurrentUser } from "../services/auth/current-user";
import reorder from "../utils/reorder";

export function useTasks() {
  const { uid } = getCurrentUser();

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateTaskLoading, setIsCreateTaskLoading] = useState(false);
  const [isUpdateTaskLoading, setIsUpdateTaskLoading] = useState(false);
  const [isDeleteTaskLoading, setIsDeleteTaskLoading] = useState(false);
  const [isToggleTaskLoading, setIsToggleTaskLoading] = useState(false);

  useEffect(() => {
    return getUserListener(uid, (user) => {
      setTasks(user?.tasks || []);
      setIsLoading(false);
    });
  }, [uid]);

  const onReorderTasks = useCallback(
    async (tasks, payload) => {
      const { source, destination } = payload;
      if (!destination) return;

      // dragging and dropping in the same area
      if (source.droppableId === destination.droppableId) {
        // didn't move anywhere
        if (source.index === destination.index) return;

        reorder(tasks, source.index, destination.index);
        await replaceTasks(uid, tasks);
      }
    },
    [uid]
  );

  const onCreateTask = useCallback(
    async (body) => {
      if (!uid) return;
      try {
        setIsCreateTaskLoading(true);
        const newTasks = [{ id: generateId(), body }, ...tasks];
        await replaceTasks(uid, newTasks);
      } catch (err) {
        console.log(err);
      } finally {
        setIsCreateTaskLoading(false);
      }
    },
    [uid, tasks]
  );

  const onUpdateTask = useCallback(
    async (taskId, body) => {
      if (!uid) return;
      if (!taskId) return;
      try {
        setIsUpdateTaskLoading(true);
        const newTasks = tasks.map((task) => {
          if (task.id === taskId) return { ...task, body };
          return task;
        });
        await replaceTasks(uid, newTasks);
      } catch (err) {
        console.log(err);
      } finally {
        setIsUpdateTaskLoading(false);
      }
    },
    [uid, tasks]
  );

  const onDeleteTask = useCallback(
    async (taskId) => {
      if (!uid) return;
      if (!taskId) return;
      try {
        setIsDeleteTaskLoading(true);
        const newTasks = tasks.filter((task) => task.id !== taskId);
        await replaceTasks(uid, newTasks);
      } catch (err) {
        console.log(err);
      } finally {
        setIsDeleteTaskLoading(false);
      }
    },
    [uid, tasks]
  );

  const onToggleTask = useCallback(
    async (taskId) => {
      if (!uid) return;
      if (!taskId) return;
      try {
        setIsToggleTaskLoading(true);
        const newTasks = tasks.map((task) => {
          if (task.id === taskId) return { ...task, done: !task.done };
          return task;
        });
        await replaceTasks(uid, newTasks);
      } catch (err) {
        console.log(err);
      } finally {
        setIsToggleTaskLoading(false);
      }
    },
    [uid, tasks]
  );

  return {
    tasks,
    createTask: onCreateTask,
    updateTask: onUpdateTask,
    deleteTask: onDeleteTask,
    toggleTask: onToggleTask,
    onReorderTasks,
    isLoading,
    isCreateTaskLoading,
    isUpdateTaskLoading,
    isDeleteTaskLoading,
    isToggleTaskLoading,
  };
}
