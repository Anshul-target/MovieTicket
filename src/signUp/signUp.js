import "../styles/login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from "../config/firebase";
import { collection, setDoc, doc } from "firebase/firestore"
// import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const history = useNavigate();



    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    // const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);
    const collectionName = collection(db, "Movies");
    const docname = doc(db, "User", "userData")
    const navigate = useNavigate();

    async function handleSignUp() {
        try {
            setError("")
            await setDoc(docname, {
                fullName,
                userName,
                email,
                password
            });
            alert("SuccessFull SignUp");
            navigate("/");
            setEmail("")
            setPassword("")

        }
        catch (err) {
            setError(err.message);
            setEmail("")
            setPassword("")
        }
    }
    return (
        <div className="container">
            <h2>SignUp</h2>
            {error && <small><p>{error}</p></small>}
            <input type="text"
                placeholder="USERNAME"
                value={userName}
                onChange={({ target }) => setUserName(target.value)}
            ></input>
            <input type="text"
                placeholder="FULL NAME"
                value={fullName}
                onChange={({ target }) => setFullName(target.value)}
            ></input>
            <input type="email"
                placeholder="EMAIL"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            ></input>
            <input type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={({ target }) => setPassword(target.value)} ></input>
            <button onClick={handleSignUp}>SignUp</button>
            <h4 >Have an account? {" "} <Link to="/signUp" style={{ textDecoration: "none" }}> SignIn</Link> </h4>
        </div>
    )

}

export default SignUp;