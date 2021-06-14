import React, { useEffect } from "react";
import { Container} from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { getSubscribedChannel } from "../../redux/actions/videoActions";
import "./subscriptionsScreen.scss";

function SubscriptionsScreen() {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector(
    (state) => state.subscriptionsChannel
  );
  useEffect(() => {
    dispatch(getSubscribedChannel());
  }, [dispatch]);
  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => <VideoHorizontal video={video} key={video.id} subScreen/>)
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="200px" count={20}/>
        </SkeletonTheme>
      )}
    </Container>
  );
}

export default SubscriptionsScreen;
