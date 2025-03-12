import React, { useState } from "react";
import "../App.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length < 8) {
      setErrorUsername("Username must be at least 8 characters");
      setUserColor("error-border");
    } else {
      setErrorUsername("");
      setUserColor("success");
    }

    if (!email.includes("@gmail.com")) {
      setErrorEmail("Email should have @gmail.com");
      setEmailColor("error-border");
    } else {
      setErrorEmail("");
      setEmailColor("success");
    }

    if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters");
      setPasswordColor("error-border");
    } else {
      setErrorPassword("");
      setPasswordColor("success");
    }

    if (confirmPassword !== password) {
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("error-border");
    } else {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("success");
    }
  };

  return (
    <div className="container">
      <div className="card">
        {/* Left Side Image */}
        <div className="card-image"></div>

        {/* Right Side Form */}
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Username"
              className={userColor}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="error">{errorUsername}</p>

            <input
              type="email"
              placeholder="Email"
              className={emailColor}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">{errorEmail}</p>

            <input
              type="password"
              placeholder="Password"
              className={passwordColor}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{errorPassword}</p>

            <input
              type="password"
              placeholder="Confirm Password"
              className={confirmPasswordColor}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="error">{errorConfirmPassword}</p>

            <button type="submit" className="submit-btn" onClick={validate}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
