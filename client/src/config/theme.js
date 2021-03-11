import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

export default createMuiTheme({
  palette: {
    background: {
      default: '#fff',
      paper: grey[50]
    },
    text: {
      primary: grey[800]
    },
    primary: {
      main: grey[900],
      light: grey[700],
      dark: '#000',
      contrastText: '#fff'
    },
    secondary: {
      main: blue[700],
      light: blue[500],
      dark: blue[900],
      contrastText: '#fff'
    }
  }
})
