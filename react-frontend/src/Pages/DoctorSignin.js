import { useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/image2.png";
import logo from "../assets/logo.png";
import { LargeTextField, PasswordInput } from "../Components/Textfeilds";
import "./DoctorSignin.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

function DoctorSignin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);

      //console.log("User UID:", user.uid);
      // Clear form fields and error state upon successful sign-in
      setEmail("");
      setPassword("");
      setError(null);

      window.location.href = "/dashboard";
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-container-one">
        {/* <img style={{ width: "500px", height: "500px" }} src={logo} alt="" /> */}
        <div className="welcome-meassage">
          <h1>Hi,</h1>
          <h1>Welcome Back</h1>
        </div>

        <img src={img2} alt="" />
      </div>

      <div className="signin-container-two">
        <div className="signin-header-link">
          <h3 className="create-account-heading">Create an account?</h3>
          <Link className="create-account-heading" to="/doctor-register">
            Sign up
          </Link>
        </div>

        <div className="signin-body">
          <div className="signin-header">
            <h1>Login {""} </h1> <h1>to eHealthHub</h1>
          </div>

          <form onSubmit={handleSignIn}>
            <div className="signin-textfield-container">
              <LargeTextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Enter your Email"}
              />
              <PasswordInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"Enter your password"}
              />
              <Link to="#" style={{ color: "white" }}>
                Forgot Password?
              </Link>
            </div>
            <div className="Signin-button-section">
              <button className="signin-button">
                <h2>Sign in</h2>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorSignin;
