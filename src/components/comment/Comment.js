import moment from "moment";
import React from "react";
import './_comment.scss'

function Comment() {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="http://pm1.narvii.com/6387/8256503d4679d3b2ea14d5df4ce2a6bd70d2b3f9_00.jpg"
        alt=""
        className="rounded-circle mr-3"
      />
      <div className="comment__body">
          <p className="comment__header mx-3 mb-1">
              <span className='username'>Dyruz Ren</span> <span className='timestamp'>{moment("2021-06-05").fromNow()}</span>
          </p>
          <p className='mx-3'>Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default Comment;
