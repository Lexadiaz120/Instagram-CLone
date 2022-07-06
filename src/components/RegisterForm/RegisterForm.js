import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
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
      const userToRegister = { email, passwd };
      if (username) {
        userToRegister.username = username;
      }
      const res = await fetch(`${process.env.REACT_APP_API_URL}/newuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userToRegister),
      });
      if (!res.ok) {
        const body = res.json();
        throw new Error(body.message);
      }
      setError("");
      setUserName("");
      setPasswd("");
      toast.success("User registered succesfully");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={RegisterUser}>
        <label htmlFor="name">Name:</label>
        <input
          id="username"
          type="name"
          value={username}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">Email*:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="passwd">Password:</label>
        <input
          id="passwd"
          type="password"
          value={passwd}
          onChange={(e) => {
            setPasswd(e.target.value);
          }}
        />
        <Button className="red_button">Register</Button>
      </form>
      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default RegisterForm;
