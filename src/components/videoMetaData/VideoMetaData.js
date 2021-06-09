import React from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

function VideoMetaData({ video: { snippet, statistics }, videoId }) {

  const {title, publishedAt, description, channelId, channelTitle} = snippet;
  const {viewCount, likeCount, dislikeCount} = statistics;
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span className="videoMetaData__top__stats">
            {numeral(viewCount).format("0.a").toUpperCase()} Views •{" "}
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span>
              <MdThumbUp size={26} />{" "}
              <span className="videoMetaData__top__stats">
                {numeral(likeCount).format("0.a")}
              </span>
            </span>{" "}
            <span className="mx-3">
              <MdThumbDown size={26} />{" "}
              <span className="videoMetaData__top__stats">
                {numeral(dislikeCount).format("0.a")}
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
            <span className="videoChannelName">{channelTitle}</span>
            <span className="videoChannelSubs">
              {numeral(20000).format("0.a")} subscribers
            </span>
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
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
}

export default VideoMetaData;
