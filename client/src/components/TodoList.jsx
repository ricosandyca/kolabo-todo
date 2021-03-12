import { useRecoilValue } from 'recoil'

import TodoItem from './TodoItem'
import { useSubscription } from '../hooks/useTodo'
import { todosState } from '../store/todo'

export default function TodoList() {
  const todos = useRecoilValue(todosState)
  useSubscription()

  return (
    <div>
      {todos?.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  )
}
