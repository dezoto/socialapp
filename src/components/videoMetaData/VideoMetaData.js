import React, { useEffect } from "react";
import "./_videoMetaData.scss";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelById,
} from "../../redux/actions/channelActions";

function VideoMetaData({ video: { snippet, statistics }, videoId }) {
  const { title, publishedAt, description, channelId, channelTitle } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);
  const { subscriptionStatus } = useSelector(
    (state) => state.channelDetails
  );
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var date = new Date(publishedAt);
date = date.toLocaleDateString(undefined, {day:'2-digit'}) + ' ' + date.toLocaleDateString(undefined, {month:'short'}) + ' ' + date.toLocaleDateString(undefined, {year:'numeric'})
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelById(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span className="videoMetaData__top__stats">
            {numberWithCommas(viewCount)} Views •{" "}
            {date}
          </span>
          <div>
            <span>
              <MdThumbUp size={26} />{" "}
              <span className="videoMetaData__top__stats">
                {numeral(likeCount).format("0.a").toUpperCase()}
              </span>
            </span>{" "}
            <span className="mx-3">
              <MdThumbDown size={26} />{" "}
              <span className="videoMetaData__top__stats">
                {numeral(dislikeCount).format("0.a").toUpperCase()}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-circle"
          />
          <div className="d-flex flex-column mx-3">
            <span className="videoChannelName">{channelTitle}</span>
            <span className="videoChannelSubs">
              {numeral(channelStatistics?.subscriberCount)
                .format("0.a")
                .toUpperCase()}{" "}
              subscribers
            </span>
          </div>
        </div>
        <button
          className={`btn border-0 p-2 m-2 ${subscriptionStatus && "btn-gray"}`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
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
