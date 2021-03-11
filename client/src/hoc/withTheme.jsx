import { ThemeProvider } from '@material-ui/core/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'

import theme from '../config/theme'

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    minHeight: '100vh',
    width: '100%'
  }
}))
function Body(props) {
  const classes = useStyles()

  return (
    <div className={classes.body}>
      {props.children}
    </div>
  )
}

export default function withTheme(Content) {
  return function () {
    return (
      <ThemeProvider theme={theme}>
        <Body>
          <Content />
        </Body>
      </ThemeProvider>
    )
  }
}
