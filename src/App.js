// import logo from './logo.svg';
import Login from "./login/login"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Movies } from "./movies/movies";
import SignUp from "./signUp/signUp";
import { ForgotPassword } from "./login/NewPassword";
import { ProtectedRoutes } from "./ProtectedRoutes/ProtectedRoutes";
function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        {/* <Route element={<ProtectedRoutes />}>
        </Route> */}

        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/emailVerification" element={<ForgotPassword />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>

      </Routes>
    </div>

  );
}







export default App;
