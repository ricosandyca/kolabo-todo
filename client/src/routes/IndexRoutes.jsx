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

const routes = [
  {
    path: '/',
    children: <Redirect to='/signin'/>,
    exact: true
  },
  {
    path: '/signin',
    component: SignInPage,
    exact: true
  },
  {
    path: '/signup',
    component: SignUpPage,
    exact: true
  },
  {
    path: '/dashboard',
    component: DashboardRoutes
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
