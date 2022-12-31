import { FirebaseData } from "@/types/firebaseTypes";
import { getFirestore, Firestore, collection, addDoc, serverTimestamp, doc, getDoc, deleteDoc, updateDoc, increment } from "firebase/firestore";

let db: Firestore;

export const initializeDatabase = function () {
  db = getFirestore()
  return db
}
export const addUrl = function (url: string, limit = 0) {
  const colRef = collection(db, "URL")
  return addDoc(colRef, { timestamp: serverTimestamp(), url: url, limit: limit, count: 0 } as FirebaseData)
}

export const getUrl = function (id: string) {
  const docRef = doc(db, "URL", id)
  return getDoc(docRef)
}

export const updatetUrl = function (id: string) {
  const docRef = doc(db, "URL", id)
  return updateDoc(docRef, { count: increment(1) })
}

export const deleteUrl = function (id: string) {
  const docRef = doc(db, "URL", id)
  return deleteDoc(docRef)
}