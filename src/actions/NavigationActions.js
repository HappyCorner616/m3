
export const HOME_PAGE = 'HOME_PAGE';
export const LOGIN_PAGE = 'LOGIN_PAGE';
export const REGISTRATION_PAGE = 'REGISTRATION_PAGE';
export const EVENT_LIST_PAGE = 'EVENT_LIST_PAGE';
export const USER_PROFILE_PAGE = 'USER_PROFILE_PAGE';
export const USER_PROFILE_EDIT_PAGE = 'USER_PROFILE_EDIT_PAGE';

export const navigateActions= {
    navigate: navigate,
    eventListPage: eventListPage,
    userProfilePage: userProfilePage
};

function navigate(page) {
    return dispatch => {
        switch (page) {
            case 'Home':
                dispatch({type: HOME_PAGE});
                break;
            case 'Login':
                dispatch({type: LOGIN_PAGE});
                break;
            case 'Registration':
                dispatch({type: REGISTRATION_PAGE});
                break;
            case 'EventList':
                dispatch({type: EVENT_LIST_PAGE});
                break;
            case 'UserProfile':
                dispatch({type: USER_PROFILE_PAGE});
                break;
            case 'UserProfileEdit':
                dispatch({type: USER_PROFILE_EDIT_PAGE});
                break;
            default:
                dispatch({type: HOME_PAGE});
        }
    }
}

function eventListPage() {
    return dispatch => {dispatch({type: EVENT_LIST_PAGE})}
}

function userProfilePage() {
    return dispatch => {dispatch({type: USER_PROFILE_PAGE});}
}