import OutlinedInput from '@material-ui/core/OutlinedInput'
import withStyles from '@material-ui/core/styles/withStyles'

const CustomInput = withStyles(() => ({
  input: {
    padding: '14px 4px'
  }
}))(OutlinedInput)

export default CustomInput
