import {
    ACTION_LOGOUT,
    USER_PROFILE_FAILURE,
    USER_PROFILE_LOADED,
    USER_PROFILE_LOADING,
    USER_PROFILE_NEED_LOADING
} from "../actions/UserActions";

export function userProfileReducer(state = {needLoading: true, data: {}}, action) {
    switch (action.type) {
        case USER_PROFILE_NEED_LOADING:
            return {needLoading: true, data: {}};
        case USER_PROFILE_LOADING:
            return {loading: true, data: {}};
        case USER_PROFILE_LOADED:
            return {loaded: true, data: action.payload};
        case USER_PROFILE_FAILURE:
            return {error: action.payload, data: {}};
        case ACTION_LOGOUT:
            return {loaded: true, data: {}};
        default:
            return {needLoading: true, data: {}};
    }
}