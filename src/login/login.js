
import '../App.css';
import { useState } from "react";
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);
    async function handleSignIn() {
        try {

            await createUserWithEmailAndPassword(auth, email, password);
            console.log("LoginSucessfull")
            return (
                <h1>Login sucessfull</h1>
            )

        }
        catch (err) {
            setError(err.message);
            // setEmail("")
            // setPassword("")
        }
    }
    return (
        <div className="container">
            <h2>Login</h2>
            {error && <small><p>{error}</p></small>}

            <input type="email"
                placeholder="EMAIL"
                onChange={({ target }) => setEmail(target.value)}
            ></input>
            <input type="password"
                placeholder="PASSWORD"
                onChange={({ target }) => setPassword(target.value)} ></input>
            <button onClick={handleSignIn}>SignIn</button>

        </div>
    )

}

export default Login;