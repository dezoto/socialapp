import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import request from "../../api";
import { useHistory } from "react-router-dom";

function VideoHorizontal({ video, searchScreen }) {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const history = useHistory();

  const handleClick = () => {
    isVideo?
    history.push(`/watch/${video.id.videoId}`):
    history.push(`/channel/${video.snippet.channelId}`)
  };

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: video.id.videoId,
        },
      });
      setDuration(items[0].contentDetails?.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [video.id.videoId]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: video.snippet.channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [video.snippet.channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const isVideo = video.id.kind === "youtube#video";
  const thumbnail = !isVideo && "videoHorizontal__thumbnail-channel";

  return (
    <Row
      className="m-1 py-2 videoHorizontal align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} md={searchScreen ? 4 : 6} className="videoHorizontal__left">
        <LazyLoadImage
          src={video?.snippet?.thumbnails?.medium?.url}
          effect="blur"
          className={`videoHorizontal__thumbnail ${thumbnail}`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {isVideo && (
          <span className="videoHorizontal__duration">{_duration}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={searchScreen ? 5 : 6}
        className="videoHorizontal__right p-0"
      >
        <p className="videoHorizontal__title mb-0">{video?.snippet?.title}</p>
        {searchScreen && isVideo && (
          <div className="videoHorizontal__details my-1">
            {numeral(views).format("0.a").toUpperCase()} •{" "}
            {moment(video?.snippet?.publishedAt).fromNow()}
          </div>
        )}
        {isVideo && (
          <div className="videoHorizontal__channel d-flex align-items-center">
            {searchScreen && (
              <LazyLoadImage
                className="my-2"
                src={channelIcon?.url}
                effect="blur"
              />
            )}
            <p>{video?.snippet?.channelTitle}</p>
          </div>
        )}

        {!searchScreen && (
          <div className="videoHorizontal__details">
            {numeral(views).format("0.a").toUpperCase()} •{" "}
            {moment(video?.snippet?.publishedAt).fromNow()}
          </div>
        )}
        {searchScreen && (
          <p className="mt-1 videoHorizontal__description">
            {video.snippet?.description}
          </p>
        )}
      </Col>
    </Row>
  );
}

export default VideoHorizontal;
