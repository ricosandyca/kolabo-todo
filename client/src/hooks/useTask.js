import { useCallback, useEffect, useState } from "react";

import { generateId } from "../services/firestore";
import {
  getUserListener,
  createTask,
  updateTask,
  toggleTask,
  deleteTask,
  setTasks,
} from "../services/firestore/user";
import { getCurrentUser } from "../services/auth/current-user";
import reorder from "../utils/reorder";

export function useTasks() {
  const { uid } = getCurrentUser();
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getUserListener(uid, (user) => {
      setTasks(user?.tasks || []);
      setIsLoading(false);
    });
  }, [uid]);

  return { isLoading, tasks };
}

export function useTaskActions() {
  const { uid } = getCurrentUser();
  const [isCreateTaskLoading, setIsCreateTaskLoading] = useState(false);
  const [isUpdateTaskLoading, setIsUpdateTaskLoading] = useState(false);
  const [isDeleteTaskLoading, setIsDeleteTaskLoading] = useState(false);
  const [isToggleTaskLoading, setIsToggleTaskLoading] = useState(false);

  const onReorderTasks = useCallback(async (tasks, payload) => {
    const { source, destination } = payload;
    if (!destination) return;

    // dragging and dropping in the same area
    if (source.droppableId === destination.droppableId) {
      reorder(tasks, source.index, destination.index);
      await setTasks(uid, tasks);
    }
  }, [uid]);

  const onCreateTask = useCallback(
    async (body) => {
      if (!uid) return;
      try {
        setIsCreateTaskLoading(true);
        const newTask = { id: generateId(), body };
        await createTask(uid, newTask);
      } catch (err) {
        console.log(err);
      } finally {
        setIsCreateTaskLoading(false);
      }
    },
    [uid]
  );

  const onUpdateTask = useCallback(
    async (taskId, body) => {
      if (!uid) return;
      if (!taskId) return;
      try {
        setIsUpdateTaskLoading(true);
        await updateTask(uid, taskId, { body });
      } catch (err) {
        console.log(err);
      } finally {
        setIsUpdateTaskLoading(false);
      }
    },
    [uid]
  );

  const onDeleteTask = useCallback(
    async (taskId) => {
      if (!uid) return;
      if (!taskId) return;
      try {
        setIsDeleteTaskLoading(true);
        await deleteTask(uid, taskId);
      } catch (err) {
        console.log(err);
      } finally {
        setIsDeleteTaskLoading(false);
      }
    },
    [uid]
  );

  const onToggleTask = useCallback(
    async (taskId) => {
      if (!uid) return;
      if (!taskId) return;
      try {
        setIsToggleTaskLoading(true);
        await toggleTask(uid, taskId);
      } catch (err) {
        console.log(err);
      } finally {
        setIsToggleTaskLoading(false);
      }
    },
    [uid]
  );

  return {
    createTask: onCreateTask,
    updateTask: onUpdateTask,
    deleteTask: onDeleteTask,
    toggleTask: onToggleTask,
    onReorderTasks,
    isCreateTaskLoading,
    isUpdateTaskLoading,
    isDeleteTaskLoading,
    isToggleTaskLoading,
  };
}
