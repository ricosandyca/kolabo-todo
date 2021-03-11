import { useState } from 'react'

/**
 * useInput hook for input value and onChange handling
 * You can simply do spread of return value to input props
 * 
 * @param {Any} defaultValue - default value of state
 * @returns {Object} of state value and its handle change input
 */
export default function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue)
  const onChange = (e) => {
    setValue(e.target.value)
  }

  return { value, onChange }
}
