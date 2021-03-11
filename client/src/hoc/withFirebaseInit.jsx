import '../config/firebase'
import firebase from 'firebase/app'
import { useEffect, useState } from 'react'

export default function withFirebaseInit(Content) {
  return function () {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setIsReady(true)
      })
    }, [])

    if (isReady) return <Content />
    return <div>Loading...</div>
  }
}
