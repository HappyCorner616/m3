import React from 'react';
import {connect} from "react-redux";
import {userActions} from "../actions/UserActions";

class UserProfileEditComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            dataInState: false,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            dateOfBirth: '',
            gender: '',
            maritalStatus: '',
            confession: '',
            foodPreferences: '',
            languages: '',
            description: '',
            rate: '',
            numberOfVoters: ''

        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.refreshProfile = this.refreshProfile.bind(this);
    }

    inputChangeHandler(e){
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    onSubmitHandler(e){
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(userActions.postProfile(this.state));
    }

    refreshProfile(e) {
        e.preventDefault();
        this.setState({dataInState: false});
        const {dispatch} = this.props;
        dispatch(userActions.getProfile());
    }

    componentDidMount() {
        //console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log("componentDidUpdate");
        const{dataInState} = this.state;
        const {loaded, data} = this.props.profile;
        if(!dataInState && loaded){
            this.setState({dataInState: true, ...data});
        }
    }

    render() {
        const{dataInState} = this.state;
        const {loaded, needLoading, loading, error, data} = this.props.profile;
        let profileData = {};
        if(dataInState){
            profileData = this.state;
        }else if(loaded){
            profileData = data;
        }
        const {firstName, lastName, email, phoneNumber, dateOfBirth, gender, maritalStatus,
            confession, foodPreferences, languages, description, rate, numberOfVoters} = profileData;
        if(loaded){
            return(
                <div>
                    <form onSubmit={this.onSubmitHandler}>
                        <input type="text" name="firstName" value={firstName} placeholder="first name" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="lastName" value={lastName} placeholder="last name" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="email" value={email} placeholder="email" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="phoneNumber" value={phoneNumber} placeholder="phone number" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="dateOfBirth" value={dateOfBirth} placeholder="dateOfBirth" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="gender" value={gender} placeholder="gender" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="maritalStatus" value={maritalStatus} placeholder="maritalStatus" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="confession" value={confession} placeholder="confession" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="foodPreferences" value={foodPreferences} placeholder="foodPreferences" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="languages" value={languages} placeholder="languages" onChange={this.inputChangeHandler}/>
                        <br/><input type="text" name="description" value={description} placeholder="description" onChange={this.inputChangeHandler}/>
                        <br/><input type="number" name="rate" value={rate} placeholder="0" onChange={this.inputChangeHandler}/>
                        <br/><input type="number" name="numberOfVoters" value={numberOfVoters} placeholder="0" onChange={this.inputChangeHandler}/>
                        <button value="Submit">Submit</button>
                    </form>
                    <button value="Refresh" onClick={this.refreshProfile}>Refresh</button>
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
            return(<div>User profile edit</div>)
        }
    }


}

const mapStateToProps = store => {
    return{
        profile: store.userProfile
    }
};

export default connect(mapStateToProps)(UserProfileEditComponent);