import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

function video() {
  return (
    <div className="video">
      <div className="video__top">
          <img
            src="https://i.ytimg.com/vi/NNNPqZaXIMo/maxresdefault.jpg"
            alt=""
          />
          <span>5:33</span>  
      </div>
      <div className="video__info">
        <img
          className="video__avatar"
          alt=""
          src="https://i.redd.it/u37pog3ixz651.png"
        />
        <div className="video__text">
          <h5>Epic Seven Arby PvP Arena</h5>
          <p>DoubleSix</p>
          <p>1.2M • 2 days ago</p>
        </div>
      </div>
    </div>
  );
}

export default video;
