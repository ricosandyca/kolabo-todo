import { useState } from 'react'

/**
 * useAlert for showing alert by type
 * 
 * @typedef {"success" | "error"} alertType
 * @typedef {{ type: alertType, message: string }} alert
 * @typedef {(message: string) => void} setSuccess
 * @typedef {(message: string) => void} setError
 * @typedef {{ alert: alert, setError: setError, setSuccess: setSuccess }} useAlertHook
 * 
 * @returns {useAlertHook}
 */
export default function useAlert() {
  const [alert, setAlert] = useState(undefined)

  /**
   * Set alert to error
   * @param {string} err - error object
   */
  const setError = (message) => {
    setAlert({
      type: 'error',
      message
    })
  }

  /**
   * Set alert to success
   * @param {String} message - success message
   */
  const setSuccess = (message) => {
    setAlert({
      type: 'success',
      message
    })
  }

  return { alert, setError, setSuccess }
}
