import {REGISTRATION_FAILURE, REGISTRATION_SUCCESS} from "../actions/UserActions";


export function registrationReducer(state = {registered: false}, action) {
    switch (action.type) {
        case REGISTRATION_SUCCESS:
            return {...state, registered: true};
        case REGISTRATION_FAILURE:
            return {...state, registered: false, message: action.payload};
        default: return state;
    }
}