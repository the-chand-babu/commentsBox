import React, { useState, useContext } from "react";
import Editer from "./Editer";
import { AppContext } from "./App";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

function Comment() {
  const { comments, setComments } = useContext(AppContext);
  const [reply, setReply] = useState("");
  const handleReply = (comment) => {
    const newComment = { ...comment, isReply: true };

    const newArray = comments.map((ele) => {
      if (ele.id == newComment.id) {
        return newComment;
      }
      return ele;
    });

    setComments(newArray);
  };

  const handleChange = (e) => {
    const newstr = e.target.value;
    setReply(newstr);
  };

  const handleClick = (comment) => {
    const newArr = [...comment.reply, reply];
    comment.reply = newArr;
    comment.isReply = false;

    const newComments = comments.map((ele) => {
      if (ele.id == comment.id) {
        return comment;
      }
      return ele;
    });

    setComments(newComments);
  };

  const handleUpvotes = (comment) => {
    comment.Upvotes++;

    const newComments = comments.map((ele) => {
      if (ele.id == comment.id) {
        return comment;
      }
      return ele;
    });

    setComments(newComments);
  };

  const handleDownlVotes = (comment) => {
    comment.Downvotes--;
    const newComments = comments.map((ele) => {
      if (ele.id == comment.id) {
        return comment;
      }
      return ele;
    });

    setComments(newComments);
  };

  return (
    <div>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <div>
                {comment.Upvotes}
                <BiUpArrow onClick={() => handleUpvotes(comment)} />
                {comment.Downvotes}{" "}
                <BiDownArrow onClick={() => handleDownlVotes(comment)} />
              </div>
              <p>{comment.message}</p>
              {comment.reply.map((ele, index) => {
                return (
                  <span key={index}>
                    Replied : {ele} <br />
                  </span>
                );
              })}
              <br />
              <span onClick={() => handleReply(comment)}>reply</span>

              {comment.isReply && (
                <>
                  <input
                    type="text"
                    placeholder="Enter Reply here"
                    onChange={handleChange}
                    name="reply"
                  />
                  <button onClick={() => handleClick(comment)}>Reply</button>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <Editer />
      </div>
    </div>
  );
}

export default Comment;
