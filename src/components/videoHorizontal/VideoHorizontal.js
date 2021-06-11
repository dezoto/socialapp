import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import request from "../../api";
import { useHistory } from "react-router-dom";

function VideoHorizontal({video}) {

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/watch/${video.id.videoId}`)
  }

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

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="m-1 py-2 videoHorizontal align-items-center" onClick={handleClick}>
      <Col xs={6} md={6} className="videoHorizontal__left">
        <LazyLoadImage
          src={video?.snippet?.thumbnails?.medium?.url}
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={6} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-0">{video?.snippet?.title}</p>
        <div className="videoHorizontal__channel d-flex align-items-center">
        <p>{video?.snippet?.channelTitle}</p>
        </div>
        <div className="videoHorizontal__details">
            {numeral(views).format("0.a").toUpperCase()} •{" "}
            {moment(video?.snippet?.publishedAt).fromNow()}
        </div>
      </Col>
    </Row>
  );
}

export default VideoHorizontal;
