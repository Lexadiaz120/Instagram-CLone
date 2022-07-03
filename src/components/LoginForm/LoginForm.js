const { useState } = require("react");
const { useNavigate } = require("react-router-dom");

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState("");

  const loginUser = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(`${process.env.REACT_APP_API_URL}/newuser`);
    } catch (error) {}
  };
};
