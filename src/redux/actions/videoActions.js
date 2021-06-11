import * as actions from "../actionTypes";
import request from "../../api";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actions.HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "AU",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    dispatch({
      type: actions.HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    dispatch({
      type: actions.HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actions.HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });
    dispatch({
      type: actions.HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    dispatch({
      type: actions.HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actions.SELECTED_VIDEO_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, statistics",
        id: id,
      },
    });
    dispatch({
      type: actions.SELECTED_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: actions.SELECTED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actions.RELATED_VIDEOS_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 40,
        type: "video",
      },
    });
    dispatch({
      type: actions.RELATED_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: actions.RELATED_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};




