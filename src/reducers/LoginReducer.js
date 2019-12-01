import {AUTHENTICATION_FAILURE, ACTION_LOGOUT, AUTHENTICATION_SUCCESS} from "../actions/UserActions";

export function loginReducer(state = {authenticated: false, error: false}, action) {
    switch (action.type) {
        case AUTHENTICATION_SUCCESS:
            return {...state, authenticated: true};
        case AUTHENTICATION_FAILURE:
            return {...state, authenticated: false, error: action.payload};
        case ACTION_LOGOUT:
            return {...state, authenticated: false, error: false}
        default: return state;
    }
}