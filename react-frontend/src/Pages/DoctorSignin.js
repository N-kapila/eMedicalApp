import { Link } from "react-router-dom";
import img2 from "../assets/image2.png";
import logo from "../assets/logo.png";
import { LargeTextField, PasswordInput } from "../Components/Textfeilds";
import "./DoctorSignin.css";

function DoctorSignin() {
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
          <a className="create-account-heading" href="#">
            Sign up
          </a>
        </div>

        <div className="signin-body">
          <div className="signin-header">
            <h1>Login {""} </h1> <h1>to eHealthHub</h1>
          </div>

          <div className="signin-textfield-container">
            <LargeTextField placeholder={"Enter your Email"} />
            <PasswordInput placeholder={"Enter your password"} />
            <Link to="#" style={{ color: "white" }}>
              Forgot Password?
            </Link>
          </div>
          <div className="Signin-button-section">
            <button className="signin-button">
              <h2>Sign in</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorSignin;
