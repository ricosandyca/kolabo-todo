import LinearProgress from '@material-ui/core/LinearProgress'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import TodoItem from './TodoItem'
import useAlert from '../hooks/useAlert'
import { useGetAllTodo } from '../hooks/useTodo'
import { useEffect } from 'react'

const useStyles = makeStyles(theme => ({
  notifBox: {
    marginBottom: theme.spacing(1.5)
  }
}))
export default function TodoList() {
  const classes = useStyles()
  const { todos, isLoading, error } = useGetAllTodo()
  const { Alert, setError } = useAlert()

  useEffect(() => {
    if (error) setError(error.message)
  }, [error, setError])

  return (
    <div>
      {isLoading && <Box className={classes.notifBox}><LinearProgress color='primary' /></Box>}
      {error && <Box className={classes.notifBox}><Alert /></Box>}
      {todos?.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  )
}
