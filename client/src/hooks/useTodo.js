import { useEffect, useState } from 'react'

import {
  getAll,
  createOne,
  updateOne,
  deleteOne
} from '../services/firestore/task'
import { getCurrentUser } from '../services/auth/current-user'

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

export function useToggleTodo() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)
  
  const toggleTodo = async (todoId, currentStatus, cb) => {
    try {
      setIsLoading(true)
      const { uid } = getCurrentUser()
      await updateOne(uid, todoId, { done: !currentStatus })
      setError(undefined)
      cb && cb(true)
    } catch (err) {
      setError(err)
      cb && cb(false)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, toggleTodo }
}

export function useDeleteTodo() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)

  const deleteTodo = async (todoId, cb) => {
    try {
      setIsLoading(true)
      const { uid } = getCurrentUser()
      await deleteOne(uid, todoId)
      setError(undefined)
      cb && cb(true)
    } catch (err) {
      setError(err)
      cb && cb(false)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, deleteTodo }
}
