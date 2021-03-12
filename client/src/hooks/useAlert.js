import { useCallback, useState } from 'react'
import MUIAlert from '@material-ui/lab/Alert'

/**
 * useAlert for showing alert by type
 * 
 * @typedef {"success" | "error"} alertType
 * @typedef {'outlined' | 'filled'} variant
 * @typedef {{ type: alertType, message: string }} value
 * @typedef {(props: { variant: variant }) => React.ReactComponentElement} Alert
 * @typedef {(message: string) => void} setSuccess
 * @typedef {(message: string) => void} setError
 * @typedef {() => void} clearAlert
 * @typedef {{
 *  value: value, 
 *  setError: setError, 
 *  setSuccess: setSuccess, 
 *  clearAlert: clearAlert, 
 *  Alert: Alert 
 * }} useAlertHook
 * 
 * @returns {useAlertHook}
 */
export default function useAlert() {
  const [value, setValue] = useState(undefined)

  /**
   * Set alert to error
   * @param {string} err - error object
   */
  const setError = useCallback((message) => {
    setValue({
      type: 'error',
      message
    })
  }, [setValue])

  /**
   * Set alert to success
   * @param {String} message - success message
   */
  const setSuccess = useCallback((message) => {
    setValue({
      type: 'success',
      message
    })
  }, [setValue])

  /**
   * Clear alert state
   */
  const clearAlert = useCallback(() => {
    setValue(undefined)
  }, [setValue])

  /**
   * Alert element
   */
  const Alert = ({ variant = 'filled' }) => {
    if (!value) return <></>
    return (
      <MUIAlert variant={variant} severity={value.type}>
        {value.message}
      </MUIAlert>
    )
  }

  return {
    value,
    setError,
    setSuccess,
    clearAlert,
    Alert
  }
}
