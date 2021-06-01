import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import TodoHeader from '../components/TodoHeader'
import TodoInputCreation from '../components/TodoInputCreation'
import TodoList from '../components/TodoList'
import { useTasks } from "../hooks/useTask";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  wrapper: {
    width: '100%',
    maxWidth: '610px',
    margin: `${theme.spacing(5)}px ${theme.spacing(3)}px`,
    '& > *': {
      marginBottom: theme.spacing(3.5)
    }
  }
}))

export default function TodoPage() {
  const classes = useStyles()
  const actions = useTasks();

  return (
    <Box className={classes.root} display='flex' justifyContent='center'>
      <Box className={classes.wrapper} display='flex' flexDirection='column'>
        {/* Header */}
        <TodoHeader />
        {/* Todo input creation */}
        <TodoInputCreation actions={actions} />
        {/* Todo list */}
        <TodoList actions={actions} />
      </Box>
    </Box>
  )
}
