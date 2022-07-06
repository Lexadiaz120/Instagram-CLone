import { useState } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
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
          <label for="username">Change username</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            id="username"
            type="name"
          ></input>
          <br />
          <label for="password">Change password</label>
          <input id="password" type="password"></input>
          <br />
          <label for="email">Change email </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="password"
            type="email"
          ></input>
          <button>Change</button>
        </form>
      </div>
    </>
  );
};
