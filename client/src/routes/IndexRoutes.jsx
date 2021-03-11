import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import DashboardRoutes from './DashboardRoutes'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import NotFoundPage from '../pages/NotFoundPage'
import { withAuthorizedUser, withUnauthorizedUser } from '../hoc/withAuthorization'

const routes = [
  {
    path: '/',
    children: <Redirect to='/signin'/>,
    exact: true
  },
  {
    path: '/signin',
    component: withUnauthorizedUser(SignInPage),
    exact: true
  },
  {
    path: '/signup',
    component: withUnauthorizedUser(SignUpPage),
    exact: true
  },
  {
    path: '/dashboard',
    component: withAuthorizedUser(DashboardRoutes)
  },
  {
    component: NotFoundPage
  }
]

export default function IndexRoutes() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </Router>
  )
}
