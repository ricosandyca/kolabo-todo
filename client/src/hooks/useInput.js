import { useState } from 'react'

/**
 * useInput hook for input value and onChange handling
 * You can simply do spread of return value to input props
 * 
 * @typedef {React.ChangeEvent<HTMLInputElement>} onChangeElm
 * @typedef {e: React.ChangeEvent<HTMLInputElement>) => void} onChange
 * @typedef {{ state: any, onChange: onChange }} inputProps
 * @typedef {{ setValue: any, inputProps: inputProps }} useInputHook
 * 
 * @param {Any} defaultValue - default value of state
 * @returns {useInputHook} of state value and its handle change input
 */
export default function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  /**
   * Handle on input change
   * @param {onChangeElm} e - input element
   */
  const onChange = (e) => {
    setValue(e.target.value)
  }

  return {
    setValue,
    inputProps: { value, onChange }
  }
}
