import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/firebase"
import { sendPasswordResetEmail } from "firebase/auth"
export const ForgotPassword = () => {

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            if (email == "") {
                setMessage("Fill the email field")
                return;
            }
            const success = await sendPasswordResetEmail(auth, email);
            setMessage("The password reset link is sent to your email")
            setTimeout(() => {
                navigate("/")
            }, 4000)
        }
        catch (err) {
            setMessage(err.message)
        }
    }
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("")
    return (
        <div style={{ width: "30%", border: "1px solid", margin: "auto", marginTop: "20%", background: "#f7f1ff", textAlign: "center", paddingBottom: "15px", boxSizing: "border-box" }}>
            <label htmlFor="myInput" style={{ float: "left", marginTop: "30px", marginLeft: "15px" }}>Email:</label>
            <input type="email" placeholder="EMAIL" value={email}
                onChange={({ target }) => setEmail(target.value)}
                style={{ width: "50%", marginTop: "25px", borderRadius: "5px" }}
                id="myInput"

            ></input>
            {message && <p>{message}</p>}
            <button onClick={handleClick}> Submit</button>

        </div>
    )
}