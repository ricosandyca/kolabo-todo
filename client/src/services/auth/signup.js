import firebase from 'firebase/app'

/**
 * Create a firebase account with email and password
 * 
 * @param {String} email - user email
 * @param {String} password - user password
 * @returns user credential
 * @throws if email and password aren't valid
 */
export async function signup(email, password) {
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
}
