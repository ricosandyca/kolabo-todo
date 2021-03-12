import { atom } from 'recoil'
import persistentEffect from './effects/persistentEffect'

export const themeState = atom({
  key: 'themeState',
  default: 'light',
  effects_UNSTABLE: [
    persistentEffect('theme')
  ]
})
