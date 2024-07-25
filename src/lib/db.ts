import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase"

function storeMessage(message: string) {
  return addDoc(collection(db, "messages"), {
  message: message,
  })}
export { storeMessage }
