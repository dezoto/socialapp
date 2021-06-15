import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentByVideoId,
} from "../../redux/actions/commentsActions";
import Comment from "../comment/Comment";
import "./_comments.scss";

function Comments({ videoId }) {
  const comments = useSelector((state) => state.commentList.comments);
  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    dispatch(getCommentByVideoId(videoId));
  }, [dispatch, videoId]);

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    dispatch(addComment(videoId, text));
    setText("");
  };

  return (
    <div className="comments">
      <p>{comments?.length} comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src={user?.photoURL}
          alt="avatar"
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            className="flex-grow-1 mx-3"
            placeholder="Write a comment..."
          />
          <button className="border-0 p-1">Comment</button>
        </form>
      </div>
      <div className="comment__list">
        {_comments?.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
