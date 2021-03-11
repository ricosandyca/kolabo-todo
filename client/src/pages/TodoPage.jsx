import { signout } from '../services/auth/signout'

export default function TodoPage() {
  return (
    <div>
      <button onClick={signout}>SIGNOUT</button>
    </div>
  )
}
