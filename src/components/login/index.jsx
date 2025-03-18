import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./style";
// import { services } from "../../services";
import contact_icon from "../assets/phone-call.png";
import password_icon from "../assets/padlock_icon.png";

const Login = ({ role }) => {
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Logging in with:", contact, password);
    e.target.disabled = "true";
  }

  
  
  return (
    <Wrapper className="maincontainer">
      <div className="container">
        
        <h2>Login</h2>

          <div className="inputs">
        <form onSubmit={handleSubmit}>
            <div className="input">
              <img src={contact_icon} alt="contact_icon" />
              <input
                type="text"
                placeholder="Contact"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="password_icon" />
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link className="forgot" to="/resetPassword">
              Forgot Password ?
            </Link>
            <div className="button">
            <button type="submit">Login</button>
            </div>

        </form>
          </div>
        <p>
          Not registered yet? 
          <Link className="register" to="/home"> Register Here</Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default Login;
