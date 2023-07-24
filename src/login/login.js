
// import '../App.css';
import "../styles/login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
export let isAuth = false;
const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);

    async function handleSignIn() {
        try {
            setError(" ")
            console.log("LoginSucessfull")
            isAuth = true;
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login Sucessfull");

            setEmail("");
            setPassword("")
            history("/movies")


        }
        catch (err) {
            setError(err.message);
            setEmail("")
            setPassword("")
            isAuth = false;
        }
    }
    return (
        <div className="container">
            <h2>Login</h2>
            {error && <small><p>{error}</p></small>}

            <input type="email"
                placeholder="EMAIL"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            ></input>
            <input type="password"
                placeholder="PASSWORD"
                value={password}

                onChange={({ target }) => setPassword(target.value)} ></input>
            <h5><Link to="/emailVerification" style={{ textDecoration: "none" }}>Forgot Password?</Link></h5>
            <button onClick={handleSignIn}>SignIn</button>
            <h4 >Dont you have an account? <Link to="/signUp" style={{ textDecoration: "none" }}> SignUp</Link> </h4>
        </div>
    )

}

export default Login;