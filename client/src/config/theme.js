import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

export default createMuiTheme({
  palette: {
    background: {
      default: '#ffffff',
      paper: grey[50]
    },
    primary: {
      main: blue[700],
      light: blue[500],
      dark: blue[900],
      contrastText: '#ffffff'
    }
  }
})
