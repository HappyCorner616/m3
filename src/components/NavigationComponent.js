import React from 'react';
import {connect} from "react-redux";
import {navigateActions} from "../actions/NavigationActions";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import RegistrationCompnent from "./RegistrationComponent";
import EventListComponent from "./EventListComponent";
import {userActions} from "../actions/UserActions";
import UserProfileComponent from "./UserProfileComponent";
import UserProfileEditComponent from "./UserProfileEditComponent";

class NavigationComponent extends React.Component {
    constructor(props){
        super(props);
        this.navigateHandler = this.navigateHandler.bind(this);
        this.logout = this.logout.bind(this);
    }

    navigateHandler(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(navigateActions.navigate(e.target.value));
    }

    logout(e){
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(userActions.logout());
    }

    render() {
        const {home, login, registration, eventList, userProfile, userProfileEdit} = this.props.navigation;
        return(
            <div>
                <nav>
                    <button className="navBtn" value='Home' onClick={this.navigateHandler}>Home</button>
                    <button value='Login' onClick={this.navigateHandler}>Login</button>
                    <button value='Registration' onClick={this.navigateHandler}>Registration</button>
                    <button value='EventList' onClick={this.navigateHandler}>EventList</button>
                    <button value='UserProfile' onClick={this.navigateHandler}>UserProfile</button>
                    <button value='UserProfileEdit' onClick={this.navigateHandler}>UserProfileEdit</button>
                    <button value='Logout' onClick={this.logout}>logout</button>
                </nav>
                <div>
                    {home ? <HomeComponent/> : ''}
                    {login ? <LoginComponent/> : ''}
                    {registration ? <RegistrationCompnent/> : ''}
                    {eventList ? <EventListComponent/> : ''}
                    {userProfile ? <UserProfileComponent/> : ''}
                    {userProfileEdit ? <UserProfileEditComponent/> : ''}
                </div>
            </div>
        )
    }


}

const mapStateToProp = (store) => {
    return{
        navigation: store.navigation
    }
};

export default connect(mapStateToProp)(NavigationComponent);