import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getCommentByVideoId } from "../../redux/actions/commentsActions";
import Comment from "../comment/Comment";
import "./_comments.scss";

function Comments({ videoId }) {
  const comments = useSelector((state) => state.commentList.comments);
  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentByVideoId(videoId));
  }, [dispatch, videoId]);

  const handleComment = (e) => {
    e.preventDefault();
    if(text.length === 0) return
    dispatch(addComment(videoId, text))
    setText('')
  };

  return (
    <div className="comments">
      <p>{comments?.length} comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="http://pm1.narvii.com/6387/8256503d4679d3b2ea14d5df4ce2a6bd70d2b3f9_00.jpg"
          alt=""
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
