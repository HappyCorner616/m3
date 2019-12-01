import {combineReducers} from "redux";
import {loginReducer} from "./LoginReducer";
import {navigationReducer} from "./NavigationReducer";
import {registrationReducer} from "./RegistrationReducer";
import {eventListReducer} from "./EventListReducer";
import {userProfileReducer} from "./UserProfileReduser";

export const rootReducer = combineReducers({
    login: loginReducer,
    navigation: navigationReducer,
    registration: registrationReducer,
    eventList: eventListReducer,
    userProfile: userProfileReducer
});