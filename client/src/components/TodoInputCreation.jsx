import { useEffect } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
import FormGroup from '@material-ui/core/FormGroup'
import makeStyles from '@material-ui/core/styles/makeStyles'

import useAlert from '../hooks/useAlert'
import useInput from '../hooks/useInput'
import { useCreateTodo } from '../hooks/useTodo'

const useStyles = makeStyles(theme => ({
  notifBox: {
    marginBottom: theme.spacing(3)
  }
}))
export default function TodoInputCreation() {
  const classes = useStyles()
  const todoInput = useInput('')
  const { isLoading, error, createTodo } = useCreateTodo()
  const { Alert, setError } = useAlert()

  useEffect(() => {
    if (error) setError(error.message)
  }, [error, setError])

  const handleSubmit = e => {
    e.preventDefault()
    const { value: todo } = todoInput.inputProps
    if (todo.trim() === '') return
    createTodo(todo, (success) => {
      if (success) todoInput.setValue('')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Box className={classes.notifBox}><Alert /></Box>}
      <FormGroup>
        <TextField
          label='What needs to be done?'
          variant='outlined'
          InputProps={{
            endAdornment: isLoading && (
              <InputAdornment position='end'>
                <CircularProgress size='24px' />
              </InputAdornment>
            )
          }}
          {...todoInput.inputProps}
        />
      </FormGroup>
    </form>
  )
}
