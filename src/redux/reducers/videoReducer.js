import * as actions from "../actionTypes";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case actions.HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case actions.HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const selectedVideoReducer = (
  state = { loading: true, video: null },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case actions.SELECTED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        video: payload,
      };
    case actions.SELECTED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        video: null,
      };
    default:
      return state;
  }
};

export const relatedVideosReducer = (
  state = { loading: true, videos: [] },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case actions.RELATED_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.RELATED_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case actions.RELATED_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const searchedVideosReducer = (
  state = { loading: true, videos: [] },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case actions.SEARCH_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.SEARCH_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case actions.SEARCH_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const subscriptionsChannelReducer = (
  state = { loading: true, videos: [] },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case actions.SUBSCRIPTION_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.SUBSCRIPTION_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case actions.SUBSCRIPTION_CHANNEL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};


