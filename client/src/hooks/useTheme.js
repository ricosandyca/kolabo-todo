import { useRecoilState } from 'recoil'
import { themeState } from '../store/view'

/**
 * useToggleTheme hook to toggle theme dark or light
 * 
 * @typedef {'light'|'dark'} theme
 * @typedef {() => void} toggleTheme
 * 
 * @returns {{ theme: theme, toggleTheme: toggleTheme }} 
 */
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
