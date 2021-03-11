import { signout } from '../services/auth/signout'

export default function DashboardRoutes() {
  return (
    <div>
      <button onClick={signout}>SIGNOUT</button>
    </div>
  )
}
