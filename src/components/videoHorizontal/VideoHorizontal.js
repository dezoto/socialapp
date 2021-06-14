import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import request from "../../api";
import { useHistory } from "react-router-dom";

function VideoHorizontal({ video, searchScreen, subScreen }) {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const history = useHistory();
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;
  const _channelId = resourceId?.channelId || channelId;
  const isVideo = video.id.kind === "youtube#video";
  const handleClick = () => {
    isVideo
      ? history.push(`/watch/${id.videoId}`)
      : history.push(`/channel/${_channelId}`);
  };

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails?.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) {
      getVideoDetails();
    }
  }, [id, isVideo]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const thumbnail = !isVideo && "videoHorizontal__thumbnail-channel";

  return (
    <Row
      className="py-2 m-1 videoHorizontal align-items-center"
      onClick={handleClick}
    >
      <Col
        xs={6}
        md={searchScreen || subScreen ? 4 : 6}
        className="videoHorizontal__left"
      >
        <LazyLoadImage
          src={medium.url}
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
        md={searchScreen || subScreen ? 5 : 6}
        className="videoHorizontal__right p-0"
      >
        <p className="videoHorizontal__title mb-0">{title}</p>
        {searchScreen && isVideo && (
          <div className="videoHorizontal__details my-1">
            {numeral(views).format("0.a").toUpperCase()} •{" "}
            {moment(publishedAt).fromNow()}
          </div>
        )}
        {subScreen && (
          <p className="my-0 subCount">{video.contentDetails.totalItemCount} Videos</p>
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
            <p>{channelTitle}</p>
          </div>
        )}

        {!searchScreen && isVideo && (
          <div className="videoHorizontal__details">
            {numeral(views).format("0.a").toUpperCase()} •{" "}
            {moment(publishedAt).fromNow()}
          </div>
        )}
        {/* eslint-disable-next-line */}
        {(searchScreen || subScreen) && (
            <p className="mt-1 videoHorizontal__description">{description}</p>
          )}
      </Col>
    </Row>
  );
}

export default VideoHorizontal;
