import firebase from 'firebase/app'

/**
 * Signin to firebase auth with email and password
 * 
 * @param {String} email - user email
 * @param {String} password - user password
 * @returns user credential
 * @throws if email and password aren't valid
 */
export async function signin(email, password) {
  return await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
}
