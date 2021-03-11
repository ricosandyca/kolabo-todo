import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default function LoadingPage() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      Please wait...
    </Box>
  )
}
