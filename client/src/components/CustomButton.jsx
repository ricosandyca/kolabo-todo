import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'

const CustomButton = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(.75),
    border: `1px solid ${theme.palette.primary.main}`,
    textTransform: 'none',
    transition: '.2s',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main
    }
  },
  disabled: {
    opacity: .5,
    border: 'none !important'
  }
}))(Button)

export default CustomButton
