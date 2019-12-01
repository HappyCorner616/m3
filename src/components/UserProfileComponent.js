import React from 'react';
import {connect} from "react-redux";
import {userActions} from "../actions/UserActions";

class UserProfileComponent  extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const {loaded, needLoading, loading, error, data} = this.props.profile;
        const {firstName, lastName, email, phoneNumber, dateOfBirth, gender, maritalStatus,
            confession, foodPreferences, languages, description, rate, numberOfVoters} = data;
        if(loaded){
            return(
                <div>
                    <p>First name: {firstName}</p>
                    <p>Last name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phoneNumber}</p>
                    <p>Birth date: {dateOfBirth}</p>
                    <p>Gender: {gender}</p>
                    <p>Marital status: {maritalStatus}</p>
                    <p>Confession: {confession}</p>
                    <p>Food preferences: {foodPreferences}</p>
                    <p>Languages: {languages}</p>
                    <p>Description: {description}</p>
                    <p>Rate: {rate}</p>
                    <p>Number of voters: {numberOfVoters}</p>
                </div>
            )
        }else if(loading){
            return(<div>Loading...</div>)
        }else if(error){
            return(<div>{error}</div>)
        }else if(needLoading){
            const {dispatch} = this.props;
            dispatch(userActions.getProfile());
            return(<div>Loading...</div>)
        }else{
            return(<div>User profile</div>)
        }
    }
}

const mapStateToProps = store => {
    return{
        profile: store.userProfile
    }
};

export default connect(mapStateToProps)(UserProfileComponent);
