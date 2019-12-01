import {Base64} from 'js-base64';
import {LOGIN_PAGE} from "./NavigationActions";
import {BASE_URL, TOKEN} from "../config";

export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
export const ACTION_LOGOUT = 'ACTION_LOGOUT';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
export const USER_PROFILE_NEED_LOADING = 'USER_PROFILE_NEED_LOADING';
export const USER_PROFILE_LOADING = 'USER_PROFILE_LOADING';
export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE';


const USER_URL = "/user";

export const userActions = {
    registration: registration,
    login: login,
    logout: logout,
    getProfile: getProfile,
    postProfile: postProfile
};

function registration(username, password) {
    return dispatch => {
        if(!validateUsername(username) || !validatePassword(password)){
            dispatch({
                type: AUTHENTICATION_FAILURE,
                payload: "Wrong username or password format"
            });
            return;
        }
        const token = getToken(username, password);

        const requestParam = {
            method: "POST",
            headers: {'Registration': token}
        };

        fetch(BASE_URL + USER_URL + "/registration", requestParam)
            .then(response => {
                if(response.ok){
                    response.json().then(json => {
                        localStorage.setItem(TOKEN, token);
                        dispatch({
                            type: REGISTRATION_SUCCESS,
                            payload: json
                        })
                    })
                }else{
                    response.json().then(json => {
                        dispatch({
                            type: REGISTRATION_FAILURE,
                            payload: json.message
                        })
                    });
                }
            }).catch(error => {
                dispatch({
                    type: REGISTRATION_FAILURE,
                    payload: "Unauthorized"
                })
        })
    }
}

function login(username, password) {
    return dispatch => {

        const token = getToken(username, password);
        const requestParam = {
            method: 'POST',
            headers: {'Authorization' : token}
        };

        fetch(BASE_URL + USER_URL + '/login', requestParam)
            .then(response => {
                if(response.ok){
                    response.json().then(json => {
                        localStorage.setItem(TOKEN, token);
                        dispatch({
                            type: AUTHENTICATION_SUCCESS,
                            payload: json
                        })
                    })
                }else{
                    response.json().then(json => {
                        dispatch({
                            type: AUTHENTICATION_FAILURE,
                            payload: json.message
                        })
                    });
                }
            }).catch(error => {
            dispatch({
                type: AUTHENTICATION_FAILURE,
                payload: "Unauthorized"
            })
        });
    }
}

function logout() {
   return dispatch => {
       localStorage.removeItem(TOKEN);
       dispatch({type: ACTION_LOGOUT});
       dispatch({type: LOGIN_PAGE})
   }
}

function getProfile(){
    return dispatch => {

        dispatch({type: USER_PROFILE_LOADING});

        const token = localStorage.getItem(TOKEN);
        const requestParam = {
            method: 'GET',
            headers: {'Authorization' : token}
        };

        fetch(BASE_URL + USER_URL + '/profile', requestParam)
            .then(response => {
                if(response.ok){
                    response.json().then(json => {
                        dispatch({
                            type: USER_PROFILE_LOADED,
                            payload: json
                        })
                    })
                }else{
                    response.json().then(json => {
                        dispatch({
                            type: USER_PROFILE_FAILURE,
                            payload: json.message
                        })
                    });
                }
            }).catch(error => {
            dispatch({
                type: USER_PROFILE_FAILURE,
                payload: "Unauthorized"
            })
        });
    }
}

function postProfile(profile){
    return dispatch => {

        dispatch({type: USER_PROFILE_LOADING});

        const token = localStorage.getItem(TOKEN);
        const requestParam = {
            method: 'POST',
            headers: {
                'Authorization' : token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        };

        fetch(BASE_URL + USER_URL + '/profile', requestParam)
            .then(response => {
                if(response.ok){
                    response.json().then(json => {
                        dispatch({
                            type: USER_PROFILE_LOADED,
                            payload: json
                        })
                    })
                }else{
                    response.json().then(json => {
                        dispatch({
                            type: USER_PROFILE_FAILURE,
                            payload: json.message
                        })
                    });
                }
            }).catch(error => {
                console.log(error);
            dispatch({
                type: USER_PROFILE_FAILURE,
                payload: "Unauthorized"
            })
        });
    }
}

function validateUsername(username) {
    return true;
}

function validatePassword(password) {
    return true;
}

function getToken(username, password) {
    return 'Basic ' + Base64.encode(username + ":" + password);
}