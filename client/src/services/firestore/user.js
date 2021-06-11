import firebase from "firebase/app";

const USERS_COLLECTION = "users";

export function getUserListener(userId, cb) {
  const db = firebase.firestore();
  return db
    .collection(USERS_COLLECTION)
    .doc(userId)
    .onSnapshot((doc) => {
      if (!doc.exists) return cb(undefined);
      cb({ ...doc.data(), id: userId });
    });
}

export async function replaceTasks(userId, userData) {
  const db = firebase.firestore();
  return await db.collection(USERS_COLLECTION).doc(userId).update(userData);
}
