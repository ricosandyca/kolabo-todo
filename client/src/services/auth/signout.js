import firebase from 'firebase/app'

/**
 * Signout from firebase auth
 */
export async function signout() {
  await firebase.auth().signOut()
}
