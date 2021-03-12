import { useSetRecoilState } from 'recoil'
import { useEffect, useState } from 'react'

import {
  getAll,
  createOne,
  updateOne,
  deleteOne,
  subscribe
} from '../services/firestore/task'
import { getCurrentUser } from '../services/auth/current-user'
import { todosState } from '../store/todo'

export function useGetAllTodo() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(undefined)
  const [todos, setTodos] = useState(undefined)

  useEffect(() => {
    (async function () {
      try {
        const { uid } = getCurrentUser()
        const todos = await getAll(uid)
        setTodos(todos)
        setError(undefined)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return { todos, isLoading, error }
}

export function useCreateTodo() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const createTodo = async (body, cb) => {
    try {
      setIsLoading(true)
      const { uid } = getCurrentUser()
      await createOne(uid, { body })
      setError(undefined)
      cb && cb(true)
    } catch (err) {
      setError(err)
      cb && cb(false)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, createTodo }
}

export function useToggleTodo(todo) {
  const { _id, done = false } = todo
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(undefined)
  
  const toggleTodo = async (cb) => {
    try {
      // setIsLoading(true)
      const { uid } = getCurrentUser()
      await updateOne(uid, _id, { done: !done })
      // setError(undefined)
      cb && cb(true)
    } catch (err) {
      // setError(err)
      cb && cb(false)
    } finally {
      // setIsLoading(false)
    }
  }

  return { toggleTodo }
}

export function useDeleteTodo(todo) {
  const { _id } = todo
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(undefined)

  const deleteTodo = async (cb) => {
    try {
      // setIsLoading(true)
      const { uid } = getCurrentUser()
      await deleteOne(uid, _id)
      // setError(undefined)
      cb && cb(true)
    } catch (err) {
      // setError(err)
      cb && cb(false)
    } finally {
      // setIsLoading(false)
    }
  }

  return { deleteTodo }
}

export function useSubscription() {
  const { uid } = getCurrentUser()
  const setTodos = useSetRecoilState(todosState)

  useEffect(() => {
    return subscribe(uid, (change) => {
      if (change.type === 'added') {
        const newTodo = {
          _id: change.doc.id,
          ...change.doc.data()
        }
        setTodos(todos => [newTodo, ...todos])
      }
      if (change.type === 'removed') {
        const removedTodoId = change.doc.id
        setTodos(todos => todos.filter(todo => todo._id !== removedTodoId))
      }
      if (change.type === 'modified') {
        const updatedTodo = {
          _id: change.doc.id,
          ...change.doc.data()
        }
        setTodos(todos => todos.map(todo => (
          todo._id === updatedTodo._id ? updatedTodo : todo
        )))
      }
    })
  }, [setTodos, uid])
}
