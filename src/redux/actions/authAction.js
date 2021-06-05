import * as actions from "../actionTypes";
import auth from "../../firebase";
import firebase from "firebase/app";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    };
    dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: accessToken
    })
    dispatch({
        type: actions.LOAD_PROFILE,
        payload: profile
    })
    console.log(profile)
  } catch (error) {
      dispatch({
          type: actions.LOGIN_FAIL,
          payload: error.message
      })
  }
};
