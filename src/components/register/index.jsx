import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "./style";
import user_icon from "../assets/user_icon.png";
import contact_icon from "../assets/phone-call.png";
import pass from "../assets/padlock_icon.png";
import sect from "../assets/section.png"
const Register = ({ handleRegister, role, setSelectedRole }) => {
  
  
  return (
    <Wrapper className="maincontainer">
      <div className="container">
        {/* created register form for student and faculty  */}
        {role === "student" && <h2>Student Registration</h2>}

        {role === "faculty" && <h2>Faculty Registration</h2>}
        <form >
          <div className="input">
            <img src={user_icon} alt="user_icon" />
            <input
              type="text"
              required
              placeholder="Your Name"

            />
          </div>

          <div className="input">
            <img src={contact_icon} alt="contact_icon" />
            <input
              type="text"
              required
              placeholder="Contact"

            />
          </div>
        {role === "student" && (
        <div className="input">
          <img src={sect} alt="section_icon" />
         
        </div>
      )}
          <div className="input">
            <img src={pass} alt="password_icon" />
            <input
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="input">
            <img src={pass} alt="password_icon" />
            <input
              type="password"
              required
              placeholder="Confirm Password"
            />
          </div>
 
          <button type="submit" >Register</button>
        </form>
        <p>
          Already registered <Link to="/register"> Click Here</Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default Register;
