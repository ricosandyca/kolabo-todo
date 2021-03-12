import { RecoilRoot } from 'recoil'
import withTheme from './hoc/withTheme'
import IndexRoutes from './routes/IndexRoutes'

export default function App() {
  const Themed = withTheme(IndexRoutes)

  return (
    <RecoilRoot>
      <Themed />
    </RecoilRoot>
  )
}
