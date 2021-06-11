import moment from "moment";
import React from "react";
import './_comment.scss'

function Comment({comment}) {
  return (
    <div className="comment p-2 d-flex">
      <img
        src={comment.authorProfileImageUrl}
        alt=""
        className="rounded-circle mr-3"
      />
      <div className="comment__body">
          <p className="comment__header mx-3 mb-1">
              <span className='username'>{comment.authorDisplayName}</span> <span className='timestamp'>{moment(comment.publishedAt).fromNow()}</span>
          </p>
          <p className='mx-3'>{comment.textOriginal}</p>
      </div>
    </div>
  );
}

export default Comment;
