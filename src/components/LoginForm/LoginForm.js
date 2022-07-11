import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import "./LoginForm.css";
import Button from "../Button/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const { token } = useUserTokenContext();
  const { setToken, UseUserId } = useUserTokenContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (token) {
    navigate("/profile");
  }

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, passwd }),
      });
      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.message);
      }
      setToken(body.data.token);
      UseUserId(body.data.userId);
      setEmail("");
      setError("");
      setPasswd("");
      toast.success("Logged succesfully");
    } catch (error) {
      toast(error.message);
    }
  };
  return (
    <>
      <div className="form-container">
        <form className="login-form" onSubmit={loginUser}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"></img>
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
          <Button className="blue_button">Log in</Button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
export default LoginForm;
