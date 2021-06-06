import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../components/categoriesBar/CategoriesBar";
import Video from "../components/video/Video";
import { getPopularVideos } from "../redux/actions/videoActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const homeVideos = useSelector(state => state.homeVideos)
  const {videos} = homeVideos

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4}>
            <Video video={video} key={video.id}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
