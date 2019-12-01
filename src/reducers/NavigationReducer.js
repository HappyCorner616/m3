import {
    EVENT_LIST_PAGE,
    HOME_PAGE,
    LOGIN_PAGE,
    REGISTRATION_PAGE, USER_PROFILE_EDIT_PAGE,
    USER_PROFILE_PAGE
} from "../actions/NavigationActions";

export function navigationReducer(state = {home: true}, action) {
    switch (action.type) {
        case HOME_PAGE: return {home: true};
        case LOGIN_PAGE: return {login: true};
        case REGISTRATION_PAGE: return {registration: true};
        case EVENT_LIST_PAGE: return {eventList: true};
        case USER_PROFILE_PAGE: return {userProfile: true};
        case USER_PROFILE_EDIT_PAGE: return {userProfileEdit: true};
        default: return state;
    }
}