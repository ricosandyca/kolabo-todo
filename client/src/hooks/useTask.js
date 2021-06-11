import { useCallback, useEffect, useState } from "react";

import { generateId } from "../services/firestore";
import { getUserListener, replaceTasks } from "../services/firestore/user";
import { getCurrentUser } from "../services/auth/current-user";
import reorder from "../utils/reorder";

export function useTasks() {
  const { uid } = getCurrentUser();

  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateTaskLoading, setIsCreateTaskLoading] = useState(false);
  const [isUpdateTaskLoading, setIsUpdateTaskLoading] = useState(false);
  const [isDeleteTaskLoading, setIsDeleteTaskLoading] = useState(false);
  const [isToggleTaskLoading, setIsToggleTaskLoading] = useState(false);

  useEffect(() => {
    return getUserListener(uid, (user) => {
      setTasks(user?.tasks || []);
      setDoneTasks(user?.done_tasks || []);
      setIsLoading(false);
    });
  }, [uid]);

  const onReorderTasks = useCallback(
    async (payload) => {
      const allTask = {
        done_tasks: doneTasks,
        tasks: tasks,
      };
      const { source, destination } = payload;
      if (!destination) return;

      // dragging and dropping in the same area
      if (source.droppableId === destination.droppableId) {
        // didn't move anywhere
        if (source.index === destination.index) return;

        const key = source.droppableId;
        reorder(allTask[key], source.index, destination.index);
        await replaceTasks(uid, allTask);
      } else {
        const sourceKey = source.droppableId;
        const destKey = destination.droppableId;

        // remove task from source
        const [removed] = allTask[sourceKey].splice(source.index, 1);
        // toggle removed task done status
        removed.done = !removed.done;
        // put removed task to destination
        allTask[destKey].splice(destination.index, 0, removed);

        await replaceTasks(uid, allTask);
      }
    },
    [uid, tasks, doneTasks]
  );

  const onCreateTask = useCallback(
    async (body) => {
      if (!uid) return;
      try {
        setIsCreateTaskLoading(true);
        const newTasks = [{ id: generateId(), body }, ...tasks];
        await replaceTasks(uid, { tasks: newTasks });
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
        const newDoneTasks = doneTasks.map((task) => {
          if (task.id === taskId) return { ...task, body };
          return task;
        });
        await replaceTasks(uid, { tasks: newTasks, done_tasks: newDoneTasks });
      } catch (err) {
        console.log(err);
      } finally {
        setIsUpdateTaskLoading(false);
      }
    },
    [uid, tasks, doneTasks]
  );

  const onDeleteTask = useCallback(
    async (taskId) => {
      if (!uid) return;
      if (!taskId) return;
      try {
        setIsDeleteTaskLoading(true);
        const newTasks = tasks.filter((task) => task.id !== taskId);
        const newDoneTasks = doneTasks.filter((task) => task.id !== taskId);
        await replaceTasks(uid, { tasks: newTasks, done_tasks: newDoneTasks });
      } catch (err) {
        console.log(err);
      } finally {
        setIsDeleteTaskLoading(false);
      }
    },
    [uid, tasks, doneTasks]
  );

  const onToggleTask = useCallback(
    async (taskId) => {
      if (!uid) return;
      if (!taskId) return;
      try {
        setIsToggleTaskLoading(true);
        let allTask = [...tasks, ...doneTasks];

        // toggle task status
        allTask = allTask.map((task) => {
          if (task.id === taskId) return { ...task, done: !task.done };
          return task;
        });

        // break down all tasks into tasks and done_tasks
        allTask = allTask.reduce(
          (acc, task) => {
            const key = task.done ? "done_tasks" : "tasks";
            acc[key].push(task);
            return acc;
          },
          { done_tasks: [], tasks: [] }
        );

        await replaceTasks(uid, allTask);
      } catch (err) {
        console.log(err);
      } finally {
        setIsToggleTaskLoading(false);
      }
    },
    [uid, tasks, doneTasks]
  );

  return {
    tasks,
    doneTasks,
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
