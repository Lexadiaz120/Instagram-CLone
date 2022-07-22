import { useState, useRef } from "react";
import {
  UserTokenContext,
  useUserTokenContext,
} from "../../contexts/UserTokenContext";
import "./CreatePostForm.css";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const CreatePostForm = ({ openForm, setOpenForm, addPhoto }) => {
  const filesRef = useRef();
  const { token } = useUserTokenContext();
  const navigate = useNavigate();
  const [description_photo, setDescription] = useState("");
  const createPost = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (const image of filesRef.current.files) {
        formData.append("foto", image);
      }
      formData.append("description_photo", description_photo);
      const postEntryRes = await fetch(
        `${process.env.REACT_APP_API_URL}/posts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (postEntryRes.ok) {
        const body = await postEntryRes.json();
        addPhoto(body.data);
        if (window.location.pathname === "/photos") {
          navigate("/photos");
        }
        toast("Post created succsefully");
        setOpenForm(false);
      }
      if (!postEntryRes.ok) {
        const postBody = await postEntryRes.json();
        throw new Error(postBody.message);
      }
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };
  return (
    <>
      {openForm ? (
        <>
          <form className="createpost-form" onSubmit={createPost}>
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              value={description_photo}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <br />
            <input type="file" id="images" ref={filesRef} />
            <br />
            <button>Enviar</button>
          </form>
        </>
      ) : null}
    </>
  );
};
