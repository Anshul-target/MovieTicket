import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
const collectionRef = collection(db, "User");

export const checkEmailExist = async (email) => {
    const q = query(collectionRef, where("email", "==", email))
    const getdata = await getDocs(q);
    console.log(getdata);
    const data = getdata.docs.map((doc) => {

        // console.log(doc.data())
        return doc.data()

    })

    // console.log(isDataPresent);
    console.log(data)
    if (data.length > 0)
        return true;
    else
        return false;



}

// checkEmail("anshulyadav@gmail.com");