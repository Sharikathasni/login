import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      seterror("");
      navigate("/home");
    } else {
      seterror("invalid email or password");
    }
  };
  return (
    <div className="container">
      <div className="image"></div>
      <form className="login" onSubmit={handleSubmit}>
        <div className="login-cont">
          <div className="heading">Create an account</div>
          <div className="sub-head">
            Lets Gets Started 
          </div>
          <input
            type="name"
            className="inp"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="inp"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="inp"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" type="submit">
            Create Account
          </button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default Login;
