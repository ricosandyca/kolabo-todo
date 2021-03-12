/**
 * Persistent effect to store data locally through client local storage
 * @param {String} localStorageKey - key of local storage
 */
export default function persistentEffect(localStorageKey) {
  return function ({ onSet, setSelf }) {

    // on init
    const savedValue = localStorage.getItem(localStorageKey)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    // on set
    onSet(newValue => {
      localStorage.setItem(localStorageKey, JSON.stringify(newValue))
    })

  }
}

