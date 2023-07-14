import React, { useState, useContext } from "react";
import { AppContext } from "./App";
import { v4 as uuidv4 } from "uuid";
function Editer() {
  const { comments, setComments } = useContext(AppContext);

  const [commentSection, setCommentSection] = useState({
    message: "",
    Upvotes: "",
    Downvotes: "",
    reply: [],
    time: "",
    id: "",
    isReply: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCommentSection({
      ...commentSection,
      [name]: value,

      Upvotes: 0,
      Downvotes: 0
    });
  };

  const handleClick = () => {
    const d = new Date();

    const t = d.getTime();
    setComments([...comments, { ...commentSection, time: t, id: uuidv4() }]);

    setCommentSection({
      message: "",
      Upvotes: "",
      Downvotes: "",
      reply: [],
      time: ""
    });
  };

  return (
    <div>
      <textarea
        name="message"
        cols="40"
        rows="5"
        placeholder="Enter Comments here"
        onChange={handleChange}
        value={commentSection.message}
      ></textarea>
      <button onClick={handleClick}>Add Comments</button>
    </div>
  );
}

export default Editer;
