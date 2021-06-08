import React from "react";
import "./_videoHorizontal.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import request from "../../api";
import { Col, Row } from "react-bootstrap";

function VideoHorizontal() {
  const seconds = moment.duration(120).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="m-1 py-2 videoHorizontal align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://t3y4b2m7.rocketcdn.me/wp-content/uploads/2018/07/youtube-logo-1920-1.jpg"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">Dragon Ball Super Goku</p>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
        {/* <LazyLoadImage
            src="https://media.comicbook.com/2020/05/dragon-ball-super-when-will-should-goku-master-ultra-instinct-1219439-1280x0.jpeg"
            effect="blur"
        /> */}
        <p>Karil Dreigar</p>
        </div>
        <div className="videoHorizontal__details">
            {numeral(450000).format("0.a").toUpperCase()} •{" "}
            {moment("2019-03-11").fromNow()}
        </div>
      </Col>
    </Row>
  );
}

export default VideoHorizontal;
