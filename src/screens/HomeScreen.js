import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../components/categoriesBar/CategoriesBar";
import Video from "../components/video/Video";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../redux/actions/videoActions";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideos from "../components/skeletons/SkeletonVideos";

function HomeScreen() {
  const dispatch = useDispatch();
  const homeVideos = useSelector((state) => state.homeVideos);
  const { videos, activeCategory, loading } = homeVideos;

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };
  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideos />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
}

export default HomeScreen;
