import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
import FormGroup from '@material-ui/core/FormGroup'

import useInput from '../hooks/useInput'

export default function TodoInputCreation() {
  const [isLoading] = useState(true)
  const todoInput = useInput('')

  const handleSubmit = e => {
    e.preventDefault()
    const { value: todo } = todoInput
    alert(todo)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <TextField
          label='What needs to be done?'
          variant='outlined'
          InputProps={{
            endAdornment: isLoading ? (
              <InputAdornment position='end'>
                <CircularProgress size='24px' />
              </InputAdornment>
            ) : undefined
          }}
          {...todoInput}
        />
      </FormGroup>
    </form>
  )
}
