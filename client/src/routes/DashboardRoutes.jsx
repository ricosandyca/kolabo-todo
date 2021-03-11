import { Switch, Route, Redirect } from 'react-router-dom'

import TodoPage from '../pages/TodoPage'

const routes = [
  {
    path: '/dashboard/todo',
    component: TodoPage,
    exact: true
  },
  {
    children: <Redirect to='/dashboard/todo' />
  }
]

export default function DashboardRoutes() {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  )
}
