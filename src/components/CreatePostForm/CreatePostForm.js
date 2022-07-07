import { useState, useRef } from "react";
import {
  UserTokenContext,
  useUserTokenContext,
} from "../../contexts/UserTokenContext";
import Button from "../Button/Button";
export const CreatePostForm = () => {
  const filesRef = useRef();
  const { token } = useUserTokenContext();
  const [description_photo, setDescription] = useState("");
  const createPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData, "soy formdata");
    for (const image of filesRef.current.files) {
      formData.append("foto", image);
    }
    formData.append("description_photo", description_photo);
    const postEntryRes = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!postEntryRes.ok) {
      const postBody = await postEntryRes.json();
      throw new Error(postBody.message);
    }
  };
  return (
    <>
      <form onSubmit={createPost}>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={description_photo}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input type="file" id="images" ref={filesRef} />
        <Button className="red_button">Send entry</Button>
      </form>
    </>
  );
};
