import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./RegisterForm.css";
import Button from "../Button/Button";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState("");
  const RegisterUser = async (e) => {
    try {
      e.preventDefault();
      // const userToRegister = { email, passwd };
      // if (username) {
      //   userToRegister.username = username;
      // }
      const res = await fetch(`${process.env.REACT_APP_API_URL}/newuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, passwd, username }),
      });
      if (!res.ok) {
        const body = await res.json();
        toast(body?.message);
        throw new Error(body?.message);
      }
      setError("");
      setUserName("");
      setEmail("");
      setPasswd("");
      toast.success("User registered succesfully");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="register-form" onSubmit={RegisterUser}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"></img>
          <input
            id="username"
            type="name"
            placeholder="Introduce your nickname"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <input
            id="email"
            type="email"
            placeholder="Introduce your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            id="passwd"
            type="password"
            placeholder="Introduce your password"
            value={passwd}
            onChange={(e) => {
              setPasswd(e.target.value);
            }}
          />
          <br />
          <Button className="blue_button">Registrarse</Button>
        </form>
      </div>
      <ToastContainer />
      <div className="not-registered">
        <div className="not-registered-links">
          <p>Tienes una cuenta?</p>
          <Link className="signup_link" to={"/signup"}>
            Entra
          </Link>
        </div>
      </div>
    </>
  );
};
export default RegisterForm;
