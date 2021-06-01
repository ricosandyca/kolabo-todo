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

export async function createTask(userId, task) {
  const db = firebase.firestore();
  const userRef = db.collection(USERS_COLLECTION).doc(userId);

  return await db.runTransaction(async (transaction) => {
    const userDoc = await transaction.get(userRef);

    // if user document doesn't exist
    if (!userDoc.exists) {
      transaction.set(userRef, { tasks: [task] });
      return;
    }

    // if user document exists
    // unshift new task (add to the first elm)
    const user = userDoc.data();
    /** @type {{ tasks: any[] }} */
    const { tasks = [] } = user;
    tasks.unshift(task);

    transaction.update(userRef, { tasks });
  });
}

export async function toggleTask(userId, taskId) {
  const db = firebase.firestore();
  const userRef = db.collection(USERS_COLLECTION).doc(userId);

  return await db.runTransaction(async (transaction) => {
    const userDoc = await transaction.get(userRef);

    // if user document doesn't exist
    if (!userDoc.exists) return;

    // if user document exists
    // unshift new task (add to the first elm)
    const user = userDoc.data();
    /** @type {{ tasks: any[] }} */
    let { tasks } = user;
    // toggle done status
    tasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, done: !task.done };
      return task;
    });

    transaction.update(userRef, { tasks });
  });
}

export async function updateTask(userId, taskId, updateTask) {
  const db = firebase.firestore();
  const userRef = db.collection(USERS_COLLECTION).doc(userId);

  return await db.runTransaction(async (transaction) => {
    const userDoc = await transaction.get(userRef);

    // if user document doesn't exist
    if (!userDoc.exists) return;

    // if user document exists
    // unshift new task (add to the first elm)
    const user = userDoc.data();
    /** @type {{ tasks: any[] }} */
    let { tasks } = user;
    // update task by id
    tasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, ...updateTask };
      return task;
    });

    transaction.update(userRef, { tasks });
  });
}

export async function setTasks(userId, tasks) {
  const db = firebase.firestore();
  return await db.collection(USERS_COLLECTION).doc(userId).update({ tasks });
}

export async function deleteTask(userId, taskId) {
  const db = firebase.firestore();
  const userRef = db.collection(USERS_COLLECTION).doc(userId);

  return await db.runTransaction(async (transaction) => {
    const userDoc = await transaction.get(userRef);

    // if user document doesn't exist
    if (!userDoc.exists) return;

    // if user document exists
    // unshift new task (add to the first elm)
    const user = userDoc.data();
    /** @type {{ tasks: any[] }} */
    let { tasks } = user;
    // delete task from list
    tasks = tasks.filter(({ id }) => id !== taskId);

    transaction.update(userRef, { tasks });
  });
}
