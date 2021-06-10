import * as actions from "../actionTypes";

export const channelDetailsReducer = (
  state = { loading: true, channel: {}, subscriptionStatus: false },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case actions.CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        channel: payload,
      };
    case actions.CHANNEL_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        channel: null,
      };
    case actions.SET_SUBSCRIPTION_STATUS:
      return {
        ...state,
        subscriptionStatus: payload,
      };
    default:
      return state;
  }
};
