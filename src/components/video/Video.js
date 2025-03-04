import React, { useEffect, useState } from "react";
import request from "../../api";
import "./_video.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";

function Video({ video, channelScreen }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const _videoId = id?.videoId || contentDetails?.videoId || id;

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [_videoId]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default.url);
    };
    getChannelIcon();
  }, [channelId]);

  const history = useHistory();
  const handleVideoClick = () => {
    history.push(`/watch/${_videoId}`);
  };
  return (
    <div className="video" onClick={handleVideoClick}>
      <div className="video__top">
        {/* <img src={medium.url} alt={title} /> */}
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video__top__duration">{_duration}</span>
      </div>
      <div className="video__info">
        {!channelScreen && <LazyLoadImage src={channelIcon} effect="blur" />}

        <div className="video__text">
          <h5>{title}</h5>
          {!channelScreen && <p>{channelTitle}</p>}
          <p>
            {numeral(views).format("0.a").toUpperCase()} Views •{" "}
            {moment(publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
