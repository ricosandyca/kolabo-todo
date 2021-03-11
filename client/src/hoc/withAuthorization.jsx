import { Redirect } from 'react-router-dom'
import { getCurrentUser } from '../services/auth/current-user'

export function withAuthorizedUser(Content) {
  return function () {
    const user = getCurrentUser()
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
  return function () {
    const user = getCurrentUser()
    console.log(user)
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
