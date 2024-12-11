import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  // Expose functions globally for integration with the global Header
  window.handleLoginClick = handleLoginClick;
  window.handleRegisterClick = handleRegisterClick;

  return (
    <div className="container">
      <div className="content">
        {isLogin ? (
          <div id="login">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
        ) : (
          <div id="registration">
            <h2>Registration</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email-reg"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password-reg"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="btn">
                Register
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
