import { signup } from '../services/auth/signup'
import useInput from '../hooks/useInput'
import useAlert from '../hooks/useAlert'

export default function SignUpPage() {
  const emailInput = useInput('')
  const passwordInput = useInput('')
  const { Alert, setError, setSuccess, clearAlert } = useAlert()

  const handleSignup = async (e) => {
    e.preventDefault()
    clearAlert()
    const { value: email } = emailInput
    const { value: password } = passwordInput
    console.log(email, password)
    try {
      const userCred = await signup(email, password)
      console.log(userCred)
      setSuccess('Success')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form onSubmit={handleSignup}>
      <Alert variant='filled' />
      <input placeholder='email' type='email' {...emailInput} />
      <input placeholder='password' type='password' {...passwordInput} />
      <input type='submit' value='submit'/>
    </form>
  )
}
