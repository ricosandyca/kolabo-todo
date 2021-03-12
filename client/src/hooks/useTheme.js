import { useRecoilState } from 'recoil'
import { themeState } from '../store/view'

export function useToggleTheme() {
  const [theme, setTheme] = useRecoilState(themeState)

  return {
    theme,
    toggleTheme: () => {
      setTheme(theme => (
        theme === 'light' ? 'dark' : 'light'
      ))
    }
  }
}
