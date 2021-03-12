import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

/**
 * Load theme provider from MUI
 * 
 * @param {"light" | "dark"} type - theme type
 * @returns {Object} theme configuration
 */
export default function loadTheme(type) {
  const secondaryColor = {
    main: blue[700],
    light: blue[500],
    dark: blue[900],
    contrastText: '#fff'
  }

  // light theme
  if (type === 'light')
    return createMuiTheme({
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
        secondary: secondaryColor
      }
    })
  
  // dark theme
  return createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        default: '#000',
        paper: grey[900]
      },
      text: {
        primary: 'rgba(255,255,255,.87)',
        secondary: 'rgba(255,255,255,.54)',
        hint: 'rgba(255,255,255,.38)',
        disabled: 'rgba(255,255,255,.38)'
      },
      primary: {
        main: grey[100],
        light: grey[300],
        dark: '#fff',
        contrastText: '#000'
      },
      secondary: secondaryColor
    }
  })
}
