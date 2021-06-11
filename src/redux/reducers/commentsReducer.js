import * as actions from "../actionTypes";

export const commentListReducer = (
  state = { loading: true, comments: null },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case actions.COMMENT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.COMMENT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: payload,
      };
    case actions.COMMENT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
