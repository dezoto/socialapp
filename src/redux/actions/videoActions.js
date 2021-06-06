import * as actions from "../actionTypes";
import request from "../../api";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "TH",
        maxResults: 20,
        pageToken: "",
      },
    });
    dispatch({
      type: actions.HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    dispatch({
      type: actions.HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
