import React from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

function VideoMetaData() {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span className="videoMetaData__top__stats">
            {numeral(21000).format("0.a").toUpperCase()} Views •{" "}
            {moment("2021-01-01").fromNow()}
          </span>
          <div>
            <span>
              <MdThumbUp size={26} />{" "}
              <span className="videoMetaData__top__stats">
                {numeral(21000).format("0.a")}
              </span>
            </span>{" "}
            <span className="mx-3">
              <MdThumbDown size={26} />{" "}
              <span className="videoMetaData__top__stats">
                {numeral(1000).format("0.a")}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="http://pm1.narvii.com/6387/8256503d4679d3b2ea14d5df4ce2a6bd70d2b3f9_00.jpg"
            alt=""
            className="rounder-circle"
          />
          <div className="d-flex flex-column mx-3">
            <span className='videoChannelName'>Dezoto</span>
            <span  className='videoChannelSubs'>{numeral(20000).format("0.a")} subscribers</span>
          </div>
        </div>
        <button className="btn boder-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ShowMoreText>
      </div>
    </div>
  );
}

export default VideoMetaData;
