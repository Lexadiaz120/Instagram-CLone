import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import "./UserSettings.css";
export const UserSettings = () => {
  const [username, setUserName] = useState("");
  console.log(username);
  const [email, setEmail] = useState("");
  const { token } = useUserTokenContext();
  console.log(token);

  const changeUserProfile = async (e) => {
    try {
      e.preventDefault();
      const changeUserRes = await fetch("http://localhost:5000/editprofile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, email }),
      });
      const postUserBody = await changeUserRes.json();
      if (!postUserBody.ok) {
        throw new Error(postUserBody.message);
      }
      console.log(postUserBody);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="user_settings">
        <form onSubmit={changeUserProfile}>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            id="username"
            placeholder="Introduce new name"
            type="name"
          ></input>
          <br />
          <input id="password" type="password"></input>
          <br />
          <input
            placeholder="Introduce new password"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="password"
            type="email"
          ></input>
          <br />
          <button>Change</button>
        </form>
      </div>
    </>
  );
};
