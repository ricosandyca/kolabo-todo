import firebase from 'firebase/app'

const USER_COLLECTION = 'users'
const TASK_COLLECTION = 'tasks'

/**
 * Get all tasks by user id
 * 
 * @typedef {{
 *  _id: string
 *  body: string,
 *  done: boolean,
 *  createdAt: Date,
 *  updatedAt: Date
 * }} Task
 * 
 * @param {String} userId
 * @returns {Task[]} task list
 */
export async function getAll(userId) {
  const userRef = firebase
    .firestore()
    .collection(USER_COLLECTION)
  const taskRef = userRef
    .doc(userId)
    .collection(TASK_COLLECTION)

  const data = await taskRef.orderBy('createdAt', 'desc').get()
  return data.docs.map(doc => ({
    _id: doc.id,
    ...doc.data()
  }))
}

/**
 * Create a new task
 * 
 * @param {String} userId 
 * @param {Task} task - new task
 * @returns {String} created task id
 */
export async function createOne(userId, task) {
  const userRef = firebase
    .firestore()
    .collection(USER_COLLECTION)
  const taskRef = userRef
    .doc(userId)
    .collection(TASK_COLLECTION)

  // create data
  const currentDate = firebase.firestore.Timestamp.fromDate(new Date())
  const newTask = {
    ...task,
    createdAt: currentDate,
    updatedAt: currentDate
  }

  const doc = await taskRef.add(newTask)
  return doc._id
}

/**
 * Update a task
 * 
 * @typedef {{
 *  body: string,
 *  done: boolean
 * }} UpdateTask
 * 
 * @param {String} userId 
 * @param {String} taskId - task id to update
 * @param {UpdateTask} updateTask - update task data
 * @returns {String} updated task id
 */
export async function updateOne(userId, taskId, updateTask) {
  const userRef = firebase
    .firestore()
    .collection(USER_COLLECTION)
  const taskRef = userRef
    .doc(userId)
    .collection(TASK_COLLECTION)

  // create data
  const currentDate = firebase.firestore.Timestamp.fromDate(new Date())
  await taskRef.doc(taskId).update({
    ...updateTask,
    updatedAt: currentDate
  })
  return taskId
}

/**
 * Delete a task
 * 
 * @param {String} userId 
 * @param {String} taskId - task to delete
 * @returns {String} deleted task id
 */
export async function deleteOne(userId, taskId) {
  const userRef = firebase
    .firestore()
    .collection(USER_COLLECTION)
  const taskRef = userRef
    .doc(userId)
    .collection(TASK_COLLECTION)

  await taskRef.doc(taskId).delete()
  return taskId
}
