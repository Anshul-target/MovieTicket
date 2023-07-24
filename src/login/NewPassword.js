import { useState } from "react"


export const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    return (
        <div style={{ width: "30%", border: "1px solid", margin: "auto", marginTop: "20%", background: "#f7f1ff", textAlign: "center", paddingBottom: "15px" }}>
            <label htmlFor="myInput" style={{ float: "left", marginTop: "30px", marginLeft: "15px" }}>Email:</label>
            <input type="email" placeholder="EMAIL" value={email}
                style={{ width: "50%", marginTop: "25px", borderRadius: "5px" }}
                id="myInput"

            ></input>
            <button> Submit</button>

        </div>
    )
}