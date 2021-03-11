import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import FormGroup from '@material-ui/core/FormGroup'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import PasswordIcon from '@material-ui/icons/VpnKeyOutlined'
import makeStyles from '@material-ui/core/styles/makeStyles'

import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

import useInput from '../hooks/useInput'
import useAlert from '../hooks/useAlert'
import { signup } from '../services/auth/signup'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: '100vh'
  },
  formBox: {
    width: '320px',
    maxWidth: '320px',
    padding: theme.spacing(3)
  },
  form: {
    margin: `${theme.spacing(2)}px 0`,
    '& > *': {
      margin: `${theme.spacing(1)}px 0`
    }
  },
  inputIcon: {
    paddingRight: theme.spacing(.5),
    paddingLeft: theme.spacing(.5),
    color: theme.palette.grey[700]
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

export default function SignUpPage() {
  const classes = useStyles()
  const histroy = useHistory()
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const passwordConfirmInput = useInput('')
  const [isLoading, setIsLoading] = useState(false)
  const { Alert, setError, clearAlert } = useAlert()

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    clearAlert()
    try {
      const { value: email } = emailInput
      const { value: password } = passwordInput
      const { value: passwordConfirm } = passwordConfirmInput

      // validate passwords
      if (password !== passwordConfirm)
        throw new Error('Password doesn\'t match')

      await signup(email, password)
      histroy.push('/dashboard')
    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false)
  }

  return (
    <Box className={classes.root} display='flex' justifyContent='center' alignItems='center'>
      <Box className={classes.formBox}>
        <Typography variant='h6' align='center'>Create an account</Typography>
        <form onSubmit={handleSubmit}>
          <FormGroup className={classes.form}>

            {/* Email input */}
            <CustomInput
              disabled={isLoading}
              name='email'
              variant='outlined'
              placeholder='Email'
              type='email'
              startAdornment={(
                <InputAdornment position='start'>
                  <EmailIcon />
                </InputAdornment>
              )}
              {...emailInput}
            />

            {/* Password input */}
            <CustomInput
              disabled={isLoading}
              name='password'
              variant='outlined'
              placeholder='Password'
              type='password'
              startAdornment={(
                <InputAdornment position='start'>
                  <PasswordIcon />
                </InputAdornment>
              )}
              {...passwordInput}
            />

            {/* Password confirmation input */}
            <CustomInput
              disabled={isLoading}
              name='password_confirmation'
              variant='outlined'
              placeholder='Password Confirmation'
              type='password'
              startAdornment={(
                <InputAdornment position='start'>
                  <PasswordIcon />
                </InputAdornment>
              )}
              {...passwordConfirmInput}
            />

            {/* Alert message */}
            <Alert variant='filled' />

            {/* Submit button */}
            <CustomButton
              variant='contained'
              color='primary'
              size='large'
              disableElevation
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Create Account'}
            </CustomButton>

          </FormGroup>
        </form>
        <Typography variant='body1' align='center'>
          <Link to='/signin' className={classes.link}>
            Already have an account? Sign In
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}
