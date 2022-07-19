import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import useUser from "../../hooks/useUser";
import "./UserSettings.css";
export const UserSettings = () => {
  const [username, setUserName] = useState("");
  const { user } = useUser();
  console.log(user, "user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const filesRef = useRef();
  const { token } = useUserTokenContext();
  const changeUserProfile = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      console.log(formData);
      for (const image of filesRef.current.files) {
        console.log(image);
        formData.append("avatar", image);
      }

      if (email !== "") {
        formData.append("email", email);
      }
      if (username !== "") {
        formData.append("username", username);
      }
      if (password !== "") {
        formData.append("passwd", password);
      }
      const changeUserRes = await fetch(
        `${process.env.REACT_APP_API_URL}/editprofile`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const postUserBody = await changeUserRes.json();
      console.log(postUserBody);
      if (!postUserBody.ok) {
        throw new Error(postUserBody.message);
      }
      if (postUserBody.ok) {
        toast("Data succesfully changed");
      }
    } catch (error) {
      toast(error.message);
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
          <input
            placeholder="Introduce new email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="email"
          ></input>
          <br />
          <input
            placeholder="Introduce new password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
            type="password"
          ></input>
          <br />
          <label for="images">Cambiar photo</label>
          <br />
          <input type="file" id="images" ref={filesRef} required />
          <br />
          <button>Change data</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
