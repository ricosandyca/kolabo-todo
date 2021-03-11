import firebase from 'firebase/app'

/**
 * Get authorized user data
 * 
 * @returns user data - if user's already authorized
 * @returns null - if user's not authorized
 */
export function getCurrentUser() {
  return firebase.auth().currentUser
}
