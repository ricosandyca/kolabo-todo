import { useHistory } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import SignOutIcon from '@material-ui/icons/ExitToAppOutlined'
import makeStyles from '@material-ui/core/styles/makeStyles'

import { signout } from '../services/auth/signout'
import { getCurrentUser } from '../services/auth/current-user'
import { todosState } from '../store/todo'

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '26px',
    fontWeight: 600,
    letterSpacing: '.5px',
    marginBottom: theme.spacing(1)
  },
  chip: {
    paddingLeft: theme.spacing(.5),
    '&:focus': {
      backgroundColor: theme.palette.primary.main
    }
  },
  avatar: {
    backgroundColor: `${theme.palette.background.default} !important`,
    color: `${theme.palette.text.primary} !important`,
    height: theme.spacing(3.1),
    width: theme.spacing(3.1)
  }
}))

export default function TodoHeader() {
  const classes = useStyles()
  const histroy = useHistory()
  const user = getCurrentUser()
  const resetTodos = useResetRecoilState(todosState)

  const handleSignOut = () => {
    signout()
    resetTodos()
    histroy.push('/signin')
  }

  return (
    <Box display='flex' flexDirection='row' justifyContent='center'>
      <Box textAlign='center'>
        <Typography className={classes.title}>Thingstodo</Typography>
        <Chip
          label={user.email}
          color='primary'
          className={classes.chip}
          onDelete={handleSignOut}
          deleteIcon={(
            <Tooltip title='Sign Out' placement='right'>
              <Avatar className={classes.avatar}>
                <SignOutIcon style={{ fontSize: '18px' }} />
              </Avatar>
            </Tooltip>
          )}
        />
      </Box>
    </Box>
  )
}
