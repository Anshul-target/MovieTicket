import { collection, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
const collectionRef = collection(db, "User");

export const checkEmail = (email) => {
    const q = query(collectionRef, where("email", "==", email))
    console.log(q);
}

// checkEmail("anshulyadav@gmail.com");