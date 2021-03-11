import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import blue from '@material-ui/core/colors/blue'

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
      light: blue[500],
      dark: blue[900],
      contrastText: '#ffffff'
    }
  }
})
