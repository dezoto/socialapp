import React from "react";
import Comment from "../comment/Comment";
import "./_comments.scss";

function Comments() {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>124 comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="http://pm1.narvii.com/6387/8256503d4679d3b2ea14d5df4ce2a6bd70d2b3f9_00.jpg"
          alt=""
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1 mx-3"
            placeholder="Write a comment..."
          />
          <button className="border-0 p-1">
              Comment
          </button>
        </form>
      </div>
        <div className="comment__list">
            {
                [...Array(15)].map(() => <Comment/>)
            }
        </div>
    </div>
  );
}

export default Comments;
