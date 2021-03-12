import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { useToggleTodo, useDeleteTodo } from '../hooks/useTodo'

const useStyles = makeStyles(theme => ({
  todoPaper: {
    background: theme.palette.background.default,
    padding: '5px',
    marginBottom: theme.spacing(.7)
  },
  doneTodo: {
    background: theme.palette.background.paper
  }
}))

export default function TodoItem({ todo }) {
  const { toggleTodo } = useToggleTodo(todo)
  const { deleteTodo } = useDeleteTodo(todo)
  const { body, done = false } = todo
  const classes = useStyles()

  return (
    <Paper
      variant='outlined'
      className={`${classes.todoPaper} ${done ? classes.doneTodo : ''}`}
    >
      <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>

        {/* Checkbox */}
        <Box>
          <Tooltip title='Check'>
            <Checkbox
              color='primary'
              checked={done}
              onClick={() => toggleTodo()}
              />
          </Tooltip>
        </Box>

        {/* Todo body */}
        <Box flex='1' padding='5px'>
          <Typography
            variant='body1'
            style={{ textDecoration: done ? 'line-through' : 'none' }}
          >
            {body}
          </Typography>
        </Box>

        {/* Delete button */}
        <Box>
          <Tooltip title='Delete'>
            <IconButton
              color='secondary'
              onClick={() => deleteTodo()}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Paper>
  )
}
