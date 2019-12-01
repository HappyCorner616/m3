import React from 'react';
import {connect} from "react-redux";
import {userActions} from "../actions/UserActions";
import {navigateActions} from "../actions/NavigationActions";

class RegistrationComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.registrationHandler = this.registrationHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    registrationHandler(e){
        e.preventDefault();
        const {dispatch} = this.props;
        const {login, password} = this.state;
        dispatch(userActions.registration(login, password));
    }

    inputChangeHandler(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        const {username, password} = this.state;
        const {registered, message} = this.props.registration;
        if(registered){
            const {dispatch} = this.props;
            dispatch(navigateActions.userProfilePage());
            return(<div></div>)
        }else{
            return(
                <div>
                    <form onSubmit={this.registrationHandler}>
                        <input type="text" name="username" value={username} placeholder="username" onChange={this.inputChangeHandler}/>
                        <input type="password" name="password" value={password} placeholder="password" onChange={this.inputChangeHandler}/>
                        <button name="regBtn">Registration</button>
                    </form>
                    {message ? <h4>{message}</h4> : ''}
                </div>
            )
        }
    }
}

const mapStateToProps = (store) => {
    return{
        registration: store.registration
    }
};

export default connect(mapStateToProps)(RegistrationComponent)