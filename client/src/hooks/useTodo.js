import { useEffect, useState } from 'react'

import {
  getAll
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
        console.log(err)
        setError(err)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return { todos, isLoading, error }
}

export function useCreateTodo() {

}

export function useUpdateTodo() {

}

export function useDeleteTodo() {

}
