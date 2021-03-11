import { Redirect } from 'react-router-dom'
import { getCurrentUser } from '../services/auth/current-user'

export function withAuthorizedUser(Content) {
  const user = getCurrentUser()

  return function () {
    if (!user)
      return (
        <Redirect to={{
          pathname: '/signin',
          state: { message: 'You have to signin to access the page' }
        }} />
      )
    return <Content />
  }
}

export function withUnauthorizedUser(Content) {
  const user = getCurrentUser()

  return function () {
    if (user)
      return (
        <Redirect to={{
          pathname: '/dashboard',
          state: { message: 'You have already signed in' }
        }} />
      )
    return <Content />
  }
}
