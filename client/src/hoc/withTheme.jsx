import { useRecoilValue } from 'recoil'
import { ThemeProvider } from '@material-ui/core/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'

import theme from '../config/theme'
import { themeState } from '../store/view'
import { useEffect } from 'react'

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

const metaThemeColor = document.querySelector('meta[name=theme-color]')
export default function withTheme(Content) {
  return function () {
    const themeType = useRecoilValue(themeState)

    useEffect(() => {
      if (themeType === 'light') {
        metaThemeColor.setAttribute('content', '#fff')
      } else {
        metaThemeColor.setAttribute('content', '#000')
      }
    }, [themeType])

    return (
      <ThemeProvider theme={theme(themeType)}>
        <Body>
          <Content />
        </Body>
      </ThemeProvider>
    )
  }
}
