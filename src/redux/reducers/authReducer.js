import * as actions from '../actionTypes';

const initialState = {
    accessToken: null,
    user: null,
    loading: false,
}

export const authReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case actions.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                accessToken: payload,
            }
        case actions.LOGIN_FAIL:
            return {
                ...state,
                accessToken: null,
                loading: false,
                error: payload,
            }
        case actions.LOAD_PROFILE:
            return {
                ...state,
                user: payload,
            }
            default:
        return state
    }
}