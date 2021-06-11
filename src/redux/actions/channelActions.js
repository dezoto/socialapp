import request from "../../api";
import * as actions from "../actionTypes";

export const getChannelById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actions.CHANNEL_DETAILS_REQUEST,
    });
    const { data } = await request("/channels", {
      params: {
        part: "snippet, statistics, contentDetails",
        id,
      },
    });
    dispatch({
      type: actions.CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: actions.CHANNEL_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
  // const {
  //   auth: { accessToken },
  // } = getState();
  try {
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: actions.SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !== 0,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
